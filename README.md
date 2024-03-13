# E-commerce Automation Framework

Welcome to the E-commerce Automation Framework, designed specifically for nopCommerce, utilizing Playwright (TypeScript).

This framework aims to streamline and automate various processes within the [nopcommerce](https://demo.nopcommerce.com/) platform, enhancing efficiency and productivity for developers and testers alike. With Playwright's robust capabilities and TypeScript's flexibility, this framework offers a powerful solution for automating e-commerce workflows.

## Page Object Model (POM) File Tree
![POM File Tree](Images/scrTree.png)

The Image above represents the file tree for the Page Object Model (POM) implemented in this framework. It provides a structured approach to organizing and managing web elements and actions within the automation framework.

## Test Cases

1. **Register**: 
   - Description: Verify the functionality to register a new user account.
   - Steps:
     1. Navigate to the registration page.
     2. Fill out the registration form with valid user details.
     3. Submit the form.
     4. Verify successful registration and user account creation.

2. **Login**: 
   - Description: Verify the functionality to log in with an existing user account.
   - Steps:
     1. Navigate to the login page.
     2. Enter valid credentials (username/email and password).
     3. Click on the login button.
     4. Verify successful login and user authentication.

3. **Search For Product**: 
   - Description: Verify the functionality to search for a product.
   - Steps:
     1. Navigate to the homepage or search page.
     2. Enter the product name or keywords in the search field.
     3. Click on the search button.
     4. Verify the search results display relevant products.

4. **Add a Product to Cart/Wishlist/Compare List/Email Friend**: 
   - Description: Verify the functionality to add a product to different lists or share options.
   - Steps:
     1. Search for a product using the search functionality.
     2. Select the desired product from the search results.
     3. Add the product to the cart, wishlist, compare list, or email a friend.
     4. Verify the product is successfully added to the respective list or shared via email.

5. **Add Shoes (Pick Size, Color, Print)**: 
   - Description: Verify the functionality to add shoes to the cart with specific options.
   - Steps:
     1. Navigate to the shoe category or product page.
     2. Select the desired shoe product.
     3. Choose the size, color, and any additional options (if available).
     4. Add the shoes to the cart.
     5. Verify the selected options are reflected in the cart.

6. **Checkout**: 
   - Description: Verify the functionality to proceed with the checkout process.
   - Steps:
     1. Add one or more products to the cart.
     2. Navigate to the cart page.
     3. Proceed to checkout.
     4. Fill out the shipping and payment details.
     5. Place the order.
     6. Verify the order is successfully placed and processed.


