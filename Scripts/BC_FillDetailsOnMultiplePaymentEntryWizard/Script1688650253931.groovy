import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_BatchAmount'), BatchAmount)

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_AccountNumber'), AccountNumber, FailureHandling.STOP_ON_FAILURE)

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_AccountNumber'), AccountNumber, FailureHandling.STOP_ON_FAILURE)

WebUI.clearText(findTestObject('screen_MultiplePaymentWizard/txt_Amount'))

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_Amount'), Amount)

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_CheckRef'), CheckRef)

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_CheckRef'), CheckRef)

WebUI.sendKeys(findTestObject('screen_MultiplePaymentWizard/txt_Description'), Description)

WebUI.click(findTestObject('screen_MultiplePaymentWizard/btn_Next'))

WebUI.waitForElementNotVisible(findTestObject('screen_MultiplePaymentWizard/txt_AccountNumber'), 1)

WebUI.click(findTestObject('screen_MultiplePaymentWizard/btn_Post'))

WebUI.callTestCase(findTestCase('BC_NavigateToBatchPaymentEntryScreen'), [:], FailureHandling.STOP_ON_FAILURE)

for (def index : (0..0)) {
}

