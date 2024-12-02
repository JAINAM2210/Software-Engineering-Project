// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class ProfilePageTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void profilePage() {
    // Test name: Profile Page
    // Step # | name | target | value
    // 1 | open | / | 
    driver.get("http://localhost:3000/");
    // 2 | setWindowSize | 1440x812 | 
    driver.manage().window().setSize(new Dimension(1440, 812));
    // 3 | click | css=.css-ullnvh-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-ullnvh-MuiButtonBase-root-MuiButton-root")).click();
    // 4 | click | id=:r5: | 
    driver.findElement(By.id(":r5:")).click();
    // 5 | type | id=:r5: | tushar123
    driver.findElement(By.id(":r5:")).sendKeys("tushar123");
    // 6 | click | id=:r7: | 
    driver.findElement(By.id(":r7:")).click();
    // 7 | mouseOver | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    {
      WebElement element = driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 8 | type | id=:r7: | Tushar@123
    driver.findElement(By.id(":r7:")).sendKeys("Tushar@123");
    // 9 | click | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root")).click();
    // 10 | click | css=.MuiButton-text | 
    driver.findElement(By.cssSelector(".MuiButton-text")).click();
    // 11 | click | css=.MuiMenuItem-root:nth-child(1) | 
    driver.findElement(By.cssSelector(".MuiMenuItem-root:nth-child(1)")).click();
    // 12 | mouseOver | css=.MuiButtonBase-root | 
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
  }
}