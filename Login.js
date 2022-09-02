

describe('Login Test Suite', function() //two params -> 1st = description, 2nd-> function without any arguments
{
    it('Visit the dev.thetutor.me', function()
     { //all the tests will come here!
       // cy is a globel command which will help to open any cypress comand.
       cy.viewport(1440,900) 
       cy.visit("https://dev.thetutor.me/");
        //fixture
    })

    it('Click on Login Button', function()
    {
        cy.get('.action-buttons > .nav-item').click(); //get the locator and click the button
       
    })

    it('enter email credentials', function()
    {
        cy.get(':nth-child(2) > .auth-input > .form-control').type('teetutor1@gmail.com');
        cy.get(':nth-child(3) > .auth-input > .form-control').type('123456');
    })

    it('Click Login Button', function()
    {
        cy.get('.auth-submit-button').click();
        cy.get('.nav-item > .rounded-circle').click();
        cy.get('.dropdown-menu > [href="https://dev-dashboard.thetutor.me/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjgyLCJuYW1lIjoidGVlIiwiZW1haWwiOiJ0ZWV0dXRvcjFAZ21haWwuY29tIiwidXNlcl90eXBlIjoidHV0b3IiLCJzb2NpYWxfYWNjZXNzX3Rva2VucyI6bnVsbCwic29jaWFsX2RhdGEiOm51bGwsInN0YXR1cyI6MSwiY3JlYXRlZF9hdCI6IjIwMjItMDgtMjYgMTM6MTk6NDkiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wOC0yOCAxMzozNToxMiIsImRvYiI6IjIwMDAtMDEtMDEiLCJtb2JpbGVfbnVtYmVyIjoiOTIzMDA1MTUxMjM0IiwidmVyaWZpY2F0aW9uX3N0YXR1cyI6MCwicmVmZXJhbF9pZCI6IldtQks5b3pSY2giLCJyZWZlcmVkX2J5IjoiIiwibG9naW5fY29kZSI6IjAiLCJyY19jaGF0Ijp7ImlkIjoyMjMsInVzZXJfaWQiOjY4MiwidXNlcm5hbWUiOiJ0ZWV0dXRvcjEiLCJyb2NrZXRfY2hhdF91c2VyX2lkIjoiODNhR0Z3RnQ4UXRrY3BnREMiLCJjaGFubmVsX2lkIjpudWxsLCJjaGFubmVsX25hbWUiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIyLTA4LTI2VDEzOjE5OjUwLjAwMDAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wOC0yNlQxMzoxOTo1MC4wMDAwMDBaIn0sInByb2ZpbGVfcGljdHVyZSI6Imh0dHBzOi8vZDE3dGhqOWtxcDFta24uY2xvdWRmcm9udC5uZXQvZGV2ZWxvcG1lbnRfc2VydmljZXMvNjgyL2hhbGYtbGVuZ3RoLXBvcnRyYWl0LWFyYWJpYW4tc2F1ZGktYnVzaW5lc3NtYW4tZGFyay1ibHVlLXdhbGwteW91bmctbWFsZS1tb2RlbC1zbWlsaW5nLXBvaW50aW5nLWNvbmNlcHQtYnVzaW5lc3MtZmluYW5jZS1mYWNpYWwtZXhwcmVzc2lvbi1odW1hbi1lbW90aW9ucy0xNjYxNTI4Mjg2LmpwZyJ9.ErA7EgAjQd2lAFbPc43axF4gTtpStCWQ7OZWsHvaLag"]').click();
       
    })

    

  })





