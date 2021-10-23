package com.Stepdefs;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DashStepdefs {
	WebDriver driver;
	ArrayList<String> expCourse = null;
	ArrayList<String> actCourse = null;

	@Before("@dash") // Tagged Hooks
	public void setup() throws Throwable {
		System.setProperty("WebDrivere.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("file:///C:/Softwere/Selenium/Offline%20Website/Offline%20Website/index.html");

	}

	@After("@dash")
	public void tearDown() {
		driver.close();
	}

	@Given("^user should be on home page$")
	public void user_should_be_on_home_page() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		driver.findElement(By.id("password")).sendKeys("123456");
		driver.findElement(By.xpath("//button")).click();

	}

	@Then("^user will make a list of courses$")
	public void user_will_make_a_list_of_courses() throws Throwable {
		actCourse = new ArrayList<String>();
		List<WebElement> list = driver.findElements(By.tagName("h3"));// 4
																		// Element
		for (WebElement course : list) {
			String text = course.getText();
			actCourse.add(text);

		}
	}

	@Then("^user verify course list$")
	public void user_verify_course_list() throws Throwable {
		expCourse = new ArrayList<String>();
		expCourse.add("Selenium");
		expCourse.add("Java / J2EE");
		expCourse.add("Python");
		expCourse.add("Php");
		Assert.assertEquals(expCourse, actCourse);

	}

}
