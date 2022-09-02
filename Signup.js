


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
        cy.get('.signupButton').click() //Signup button

    })
    
})


describe('on-boarding', function()
{

it('close notification', function()
{
    cy.get('.toast-close').click();

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



  //  cy.get('.highlight').eq(0).should('contains.text', 'Pakistan');
//  cy.get('select[id="data-dial-code"]').select('92').should('have.value', '92')