package com.Stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdefs {
	WebDriver driver;

	@Before("@login")
	public void setup() throws Throwable {
		System.setProperty("WebDrivere.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("file:///C:/Softwere/Selenium/Offline%20Website/Offline%20Website/index.html");

	}

	@After("@login")
	public void tearDown() {
		driver.close();
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		if (!driver.getTitle().contains("Log in"))
			driver.findElement(By.linkText("LOGOUT")).click();

		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);

	}

	@And("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user will be on home page$")
	public void user_will_be_on_home_page() throws Throwable {
		Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	}

	
	  @When("^user enters valid credentials$") public void
	 user_enters_valid_credentials() throws Throwable {
	  driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
	  driver.findElement(By.id("password")).sendKeys("123456");
	  
	  }

}
