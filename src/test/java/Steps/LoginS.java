package Steps;

import Base.BaseUtil;
import cucumber.api.DataTable;
import org.junit.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import pages.LoginPage;

import java.util.ArrayList;
import java.util.List;

public class LoginS extends BaseUtil {

    private BaseUtil base;

    public LoginS(BaseUtil base) {
        this.base = base;
    }


    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable{
        System.out.println("Navigate to login page");
        base.Driver.navigate().to("http://www.executeautomation.com/demosite/Login.html");
    }

    @And("^I enter the following for login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {
        List<User> users = new ArrayList<User>();
        users = table.asList(User.class);

        LoginPage page = new LoginPage(base.Driver);
        for (User user : users) {
            page.Login(user.userName, user.password);
            /*base.Driver.findElement(By.name("UserName")).sendKeys(user.userName);
            base.Driver.findElement(By.name("Password")).sendKeys(user.password);*/
        }
    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable{

        LoginPage page = new LoginPage(base.Driver);
        page.ClickLogin();
        /*base.Driver.findElement(By.name("Login")).submit();*/
    }

    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable{
        Assert.assertEquals("Its not Displayed", base.Driver.findElement(By.id("Initial")).isDisplayed(), true);
    }

    @Then("^I should see the userform page wrongly$")
    public void iShouldSeeTheUserformPageWrongly() throws Throwable {
        Assert.assertEquals("Its not Displayed", base.Driver.findElement(By.id("Initials")).isDisplayed(), true);
    }

    public class User {
        public String userName;
        public String password;

        public User(String username, String pwd) {
            userName = userName;
            password = pwd;
        }
    }
}
