


describe('Login Function', function()
{
    it('Visiting Website', function()
    {
        cy.visit("https://dev.thetutor.me/");
    })

    it('Click SignUp Button', function()
    {
        cy.get('.action-buttons > .signup_btn').click();
    })

    it('Click Tutor Button', function()
    {
        cy.get(':nth-child(2) > .nav-link').click();
    })

    it('Tutor Signup Form', function()
    {
        cy.get(':nth-child(1) > .auth-input > .form-control').click().type(tutorName()); // Tutor Name
        cy.get('.auth-form > :nth-child(2) > .auth-input > .form-control').click().type(tutorEmail()) // Tutor email
        cy.get(':nth-child(3) > .auth-input > .form-control').click().type( tutorPassword()) // Tutor Password
        cy.get('.down-arrow').click();
        cy.get('#mobile-number').clear().type(tutorNumber()); // Tutor mobile number
        cy.get('.row > :nth-child(2) > .auth-input > .form-control').click().type(DOB());// Tutor DOB
        cy.get(':nth-child(1) > .custom-control-label').click();      //Certified Tutor -> Yes
        cy.get('.check').click() // Terms & Conditions
        cy.get('.signupButton').click();   
        
        if(cy.get('.toastify')) //if user is already created
    {
       cy.get('.log-green').click(); // go to login screen
    }

    })
    
})

describe("Login Function for On-boarding", function()  // Login for On-boarind Process
{
  it("Login details", function()
  {
    cy.get(':nth-child(2) > .auth-input > .form-control').click().type(tutorEmail());
    cy.get(':nth-child(3) > .auth-input > .form-control').click().type(tutorPassword());
    cy.get('.auth-submit-button').click(); // main page should appear
  })

})

describe("Moving to dashboard", function()  // move to dashboard
{
  it("Login details", function()
  {
    cy.get('.nav-item > .rounded-circle').click();
    cy.get('.dropdown-menu > [href="https://dev-dashboard.thetutor.me/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njk3LCJuYW1lIjoiVGVlIFR1dG9yIiwiZW1haWwiOiJ0dXRvcjFAZ21haWwuY29tIiwidXNlcl90eXBlIjoidHV0b3IiLCJzb2NpYWxfYWNjZXNzX3Rva2VucyI6bnVsbCwic29jaWFsX2RhdGEiOm51bGwsInN0YXR1cyI6MSwiY3JlYXRlZF9hdCI6IjIwMjItMDktMDIgMTE6MDc6NTgiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wOS0wMiAxMTowNzo1OCIsImRvYiI6IjIwMDAtMTAtMTAiLCJtb2JpbGVfbnVtYmVyIjoiKzkyMzA1NzM3Nzc1NyIsInZlcmlmaWNhdGlvbl9zdGF0dXMiOjAsInJlZmVyYWxfaWQiOiJUSlhkVWQyU3k5IiwicmVmZXJlZF9ieSI6IiIsImxvZ2luX2NvZGUiOiIwIiwicmNfY2hhdCI6eyJpZCI6MjM4LCJ1c2VyX2lkIjo2OTcsInVzZXJuYW1lIjoidHV0b3IxIiwicm9ja2V0X2NoYXRfdXNlcl9pZCI6Im90QUtFY25qd2NqWjN4RTZuIiwiY2hhbm5lbF9pZCI6bnVsbCwiY2hhbm5lbF9uYW1lIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMi0wOS0wMlQxMTowNzo1OS4wMDAwMDBaIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMDJUMTE6MDc6NTkuMDAwMDAwWiJ9LCJwcm9maWxlX3BpY3R1cmUiOiIifQ.0yxuxMl1nM9kXA5wQRuEqUCF5lG7IxIvagTt6cb1PsI"]').click()
  })

  it("dashboard validation", function()
  {
    if(cy.get('.logo-dark > .logo-lg > img'))
    {
        cy.get('#tutor-cover-upload-button').click();
    }

  })
})











function tutorName() // for Tutor Name
{
    let tutorname = "Tee Tutor";
    return tutorname;
}

function tutorEmail() // for Tutor Email
{  let tutorid = "tutor";
   let tutorcount = 0;
   let domain = "@gmail.com";
   tutorcount = tutorcount + 1;
    return tutorid+tutorcount+domain;
}

function tutorPassword() //For Tutor Password
{
    let tutorPass = "123456"
    return tutorPass;
}

function tutorNumber() //For Tutor Phone Number
{
    let phoneNumber = '+923057377757'
    return phoneNumber;
}

function DOB() // For Tutor DOB
{
    let dob = "2000-10-10";
    return dob;
}

function randomPass() // randompass for validation
{

}


  //  cy.get('.highlight').eq(0).should('contains.text', 'Pakistan');
//  cy.get('select[id="data-dial-code"]').select('92').should('have.value', '92')