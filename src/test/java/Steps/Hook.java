package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.lang.ThreadDeath;

public class Hook extends BaseUtil {
    private BaseUtil base;
    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public  void InitializeTest()
    {
        System.out.println("Opening the browser : Firefox");
        System.setProperty("webdriver.gecko.driver", "C:\\Libs\\geckodriver.exe");
        base.Driver = new FirefoxDriver();
    }

    @After
    public  void TearDownTest(Scenario scenario)
    {
        System.out.println("Closing the browser : Firefox");
        base.Driver.quit();
    }
}
