<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>BC_BatchPaymentEntry</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>605be6d4-771f-465a-b8d6-1277401822d1</testSuiteGuid>
   <testCaseLink>
      <guid>304a146e-e846-4dd6-b4d2-b62dc3f891fc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/BC_Login</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>84573b01-c2a8-459a-a41d-de115d5ae0c6</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/BC_NavigateToBatchPaymentEntryScreen</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>a85ed66f-b1c3-4115-811c-96637bcd7d76</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/BC_FillDetailsOnMultiplePaymentEntryWizard</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c7ab4b18-6204-462b-b290-c5833d58bf03</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/BatchPaymentsData</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>c7ab4b18-6204-462b-b290-c5833d58bf03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>BatchAmount</value>
         <variableId>828606dc-b3b7-4982-af35-2d532c95755e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c7ab4b18-6204-462b-b290-c5833d58bf03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AccountNumber</value>
         <variableId>380a91fa-c1be-41ff-943d-7d99488973ee</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c7ab4b18-6204-462b-b290-c5833d58bf03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Amount</value>
         <variableId>82342bb4-6eb8-45ad-94d3-71e9bed3ca05</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c7ab4b18-6204-462b-b290-c5833d58bf03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>CheckRef</value>
         <variableId>c02de427-6a1e-49ef-8aba-81589f5b11bf</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c7ab4b18-6204-462b-b290-c5833d58bf03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>a1abe7e3-278f-4bbb-8fd4-dfeb57f47176</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>585c4624-331c-44b8-a236-44fd2a8a8cf4</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/BC_RunPostSurePathBatch Payment</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>054b764e-6399-4fe7-9ae7-e9c9dac307e2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/BC_VerifyPostedPaymentOnAccount</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>9199b6a0-2bea-4df4-bac4-f09df6cad529</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/BC_Logout</testCaseId>
   </testCaseLink>
</TestSuiteEntity>