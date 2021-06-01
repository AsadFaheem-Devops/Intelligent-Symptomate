import React from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { BrowserView, MobileView } from "react-device-detect";
import Header from "../Navbar/header"

export default function Privacy() {
  return (
    <div>
    <Header />

    <div style={{ backgroundColor: "#F8F8F8" }}>
    <BrowserView>
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5%",
          paddingBottom: "5%",
          textAlign: "center"
        }}
      >
        <div
          style={{
            border: "1px solid #DCDCDC",
            backgroundColor: "#fff",
            padding: "7%"
          }}
        >
          <h5>Add Medication Information</h5>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          <h3>Intelligent Symptomate Health GmbH Privacy Policy</h3>
          <p>You must be 16 years or older to use our Services.

Protecting your data, privacy and personal data (as defined under Article 4(1) of the General Data Protection Regulation (EU) 2016/679 (“GDPR”)) is very important to Intelligent Symptomate Health GmbH (“us”, “our” or “we”). It is vitally important to us that our customers (the “users”) feel secure when using our products and services.

This privacy policy (the “Privacy Policy”), together with our Terms & Conditions at Intelligent Symptomate.com/terms-and-conditions, our Cookie Policy at Intelligent Symptomate.com/cookie-policy and any other documents referred therein, sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed. Please read this Privacy Policy carefully to understand the types of data we collect from you, how we use it, the circumstances under which we will share it with third parties, and your rights in relation to your personal data.

When using “Intelligent Symptomate” (through our mobile application (the “App”), when and where available our web-based application (the “Web-embed”) and our screening tool (the “Screening Tool”), together the “Medical Device”), or when accessing our website Intelligent Symptomate.com (the “Website”) or any service and/or product we may provide you (Website together with the Medical Device and any of our product and services, the “Services”), you will be asked to indicate your acknowledgment of, and where applicable, give your consent to the processing activities as described in this Privacy Policy.

1. Who we are
This Privacy Policy applies to any personal data processed by Intelligent Symptomate Health GmbH (HRB 189710), Karl- Liebknecht-Straße 1, 10178 Berlin, Germany being the data controller (as defined under Article 4(7) GDPR) of all processing activities in connection with the Services.

Questions, comments and requests regarding this Privacy Policy are welcome and should be addressed through our contact form here. Our data protection officer can be contacted at dpo@Intelligent Symptomate.com.

2. General overview of the data processing in connection with the Services
Before starting using our Services, you have to confirm that you have read our Privacy Policy carefully, and to consent to Intelligent Symptomate analyzing the personal health data you supply in order to be provided with an assessment and health advice, for which you can find an information summary here.

This section 2 aims at giving you a quick high-level overview of the data processing activities in connection with the Services we provide you.

If you wish to read in detail all the data processing activities we undertake, we advise you to read the following section 3 relating to each specific data processing activity, and sections 4 to 9 that relate to:

our cookies & tracking policy (section 4), 
where we store your personal data (section 5), 
when we may disclose your personal data (section 6), 
our retention policy (section 7), 
your data subjects’ rights (section 8),
your specific rights if you are a California resident (US) (section 9), and
our changes policy (section 10).
Information that you provide to us: we may collect and process personal data that you will be asked to provide when you:

fill in forms on our Website, apply for a job offer or otherwise correspond with us by any available means;
register to use our Services, subscribe to our newsletter, receive promotional emails or any other marketing materials;
use our Services;
report a problem with our Services; or
complete any surveys or provide any feedback that we may use for research and improvement purposes (although it is optional, and you do not have to respond to these if you do not want to).
The information that we may ask you to provide includes, but is not limited to, your name, gender, date of birth, email address, phone number, symptoms of your illness, potential causes of your illness symptoms, health insurance (optional), medical history, any allergies you have, or further information required to verify your identity.

Information we collect about you: although we will not use it to identify you, we may collect the following data during each of your visits and use of our Services:

Usage data: technical information about your device, including device-specific information such as your hardware model, operating system version, unique device identifiers, and mobile network information; details of your visits, including the full Uniform Resource Locators (“URL”) clickstream to, through and from our Services (including date and time); details of conditions and symptoms searched;
Analytics data: your IP address, operating system and browser type; information about which app store you downloaded our App from; length of visits to certain pages, and page interaction information (such as scrolling, finger gestures, clicks, and mouse-overs)
If you are using our Services on behalf of a third party, you must have obtained clear permission from the individuals whose data you provide us with before sharing that data. For the avoidance of any doubt, any reference in this Privacy Policy to “your data” shall include data about other individuals that you have provided us with.

Our Website may contain links to third-party websites. If you follow a link to any of those third-party websites, please note that they have their own privacy policies and that we do not accept any responsibility or liability for their policies or processing of your personal data. Please check these policies before you submit any personal data to such third-party websites.

3. Which personal data we may collect and process, why and for how long
3.1 When you use our Website
Types of data: IP address of the requesting device, date and time of access, name and URL of the requested file, website from which access is obtained (“Referrer URL”), browser used and, where applicable, your device’s operating system and the identity of your access provider.
Purpose of processing: We use the above data to provide you with access to our Website, ensure that the Website can establish an internet connection smoothly and is easy to use, and to analyze the system security and stability, as well as for additional administrative purposes.
Use justification: Legitimate interest (Article 6(1)(f)GDPR). Our legitimate interest is based on the data collection purposes listed under “Purpose of processing”. We do not use the data collected for the purpose of identifying you. You are not obliged to provide the above personal data; however, you will not be able to access the Website if such personal data are not provided.
Storage duration: Your data is removed after 15 days, unless any security-relevant event occurs (e.g. a DDoS attack). If there is a security-relevant event, server log files are stored until the security-relevant event has been eliminated and clarified in full.
3.2 When you register a user account or create a new profile
Types of data: Email address and password, account ID, device ID, profile name, gender, date of birth, health insurance (optional), general data about your health (optional) such as smoking, increased blood pressure, diabetes, and pregnancy status, date, time and location of registration.
Purpose of processing: We use the above data to provide you with a user account and access to our Medical Device. We use the general health data for the basic analysis. It is not possible to access our Medical Device if the (non-optional) data are not provided. If you use our Medical Device through a Web-embed application, with your consent we may disclose pseudonymized usage data (not including any personal health data) to the partner that hosts the Web-embed. 
Use justification: Contract performance (Article 6(1)(b)GDPR / Consent (Article9(2)(a) GDPR) for the processing of your health data.
Storage duration: We process your data for the purposes specified above until you request deletion of your account or when you delete your account. If your account is inactive for more than 24 months, we will contact you to check whether you wish to continue using our Medical Device. If you then leave your user account unused for another 3 months, we will delete your account. In either case, we will delete your account within 1 month and delete or irreversibly anonymize your data (such that it cannot be associated with a specific natural person). We will further retain your data (see section 7 for more details), e.g. for the purposes of establishing, exercising or defending against legal claims and to comply with high quality and safety standards, in particular our Post-Market Surveillance obligations but we will not process the data for any other purposes. 
3.3 Health profile
Types of data: Body height and weight, any medication you are taking (permanently or not) and any allergies you may have.
Purpose of processing: This feature allows you to create a comprehensive health profile to manage your health data in our Medical Device. However, we will not process the data you provide for the creation of the health profile to determine the assessment results in accordance with section 3.5.
Use justification: Consent (Article 9(2)(a) GDPR). You may revoke/withdraw your consent at any time.
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.4 Facebook Login / Apple Login
Types of data: Facebook ID, Apple user ID, email address (if you authorize Facebook to share the address with us), time and date of the login.
Purpose of processing: If you choose to use and login with Facebook or Apple, we will receive the data listed above from Facebook or Apple with your approval to populate your user data in the App, and to verify your identity. Please note that if you use the Facebook login or the Apple login, Facebook or Apple may also process your data (Facebook ID/ Apple ID, metIntelligent Symptomateta, some app events and device metric). We are not responsible for this data processing; you can learn more about this in Facebook’s Privacy Policy / Apple's Privacy Policy.
Use justification: Legitimate interest (Article 6(1)(f) GDPR). Our legitimate interest is to provide users who do not have an email account or who wish to log in with their Facebook account or Apple account the option to use our Services / Contract performance (Article 6 (1)(b) / Consent (Article 6 (1)(a) GDPR). 
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing in accordance with section 3.2. Data processed by Facebook or Apple, which we do not control if you choose to use Facebook login or Apple login, may remain in Facebook’s servers or Apple’s servers. Should you delete your Facebook account or stop using your Apple device and wish to use the App, you will be directed to sign-in with an email or other login procedure.
3.5 Create an assessment case
Types of data: profile ID, profile name (when applicable) and related personal health data required to provide the assessment such as age, gender, illness symptoms, potential causes of illness symptoms, allergies, pregnancy status, relevant and/or related medical history, geographic location, time and date of assessment.
Purpose of processing: To provide you with our assessment by means of our Medical Device, for example but not limited to, suggest possible causes for the given symptoms (assessment), and track your symptoms.
Use justification: Contract performance (Article 6(1)(b) GDPR / Consent (Article 9(2)(a)GDPR) for the processing of your health data. You may revoke/withdraw your consent at any time; however, it is not possible to provide you with our Medical Device (i.e. the assessment) without such consent.
Storage duration: As a rule, the storage duration corresponds to the period of processing according to section 3.2. In addition, you may request the deletion of a specific case or delete the case yourself. We will then delete or irreversibly anonymize your case data (such that it cannot be associated with a specific natural person) within 1 month. We will further retain some of your data (see section 7 for more details) but we will not process the data for any other purposes.
3.6 Analysis of case information to guarantee high quality and safety standards of our Medical Device
Types of data:  Account ID (when applicable), profile ID (when applicable), case ID, time and date of assessment, geographic location of assessment, data provided in a case (personal health data required to provide the assessment such as age, gender, illness symptoms, potential causes of illness symptoms, allergies, pregnancy status, and relevant and/or related medical history), feedback, assessment result, and data related to software and hardware (such as version numbers, operating system, and device ID).
Purpose of processing: To guarantee high quality and safety standards of our Medical Device, it is necessary to review the quality of the assessment results (the “Analysis”). The safety and quality staff (the “Medical Experts”) use pseudonymized data and, when applicable, aggregated data to evaluate the assessment results and determine if any improvement is needed in order for our Medical Device to meet the highest quality and safety standards.
Use justification: The processing is required to comply with the necessary standards of quality and safety of our Medical Device which qualify as a medical device under medical device regulations and as provided in the following legal texts (section 22(1)(1)(c) BDSG, Article 9(2)(i) GDPR), on the basis of Post-Market Surveillance obligations under Sec. 6 (1),(2) MPG in connection with section (7)(4) of the German Medical Device Ordinance in connection with Annexes X, VII, (4) of the EU Medical Devices Directive (93/42/EC) (or directly applicable from 26.05.2021 at the latest, but to be considered as already applicable to ensure high standards of quality and safety of our Medical Device, Article 83 et seq. and Annex III of the EU Medical Devices Regulation (2017/745/EU)).
Storage duration: We process your data until no longer necessary for the purposes specified above. The storage duration of your data for this purpose corresponds with our obligation to comply with the necessary standards of quality and safety of our App.
3.7 Assessing your suitability for and inviting you to clinical research and referring you to health services for follow-up diagnostics
Types of data: Email address, account ID, profile name, date of birth, illness symptoms, potential causes of illness symptoms, medical history, allergies, geographic location, time and date of assessment, and other data that you have provided to us.
Purpose of processing: We use the above data to assess your suitability for clinical research and to reach out in order to invite you to partake in clinical research with one of our clinical research partners that may be of interest to you and/or to refer you to health services for follow-up diagnostics. For the avoidance of doubt, we do not pass on any personal data to our clinical research partners without your consent and any participation to such clinical researches and referrals to health services are optional and subject to your prior consent.
Use justification: Consent (Article 6(1)(a) and Article 9(2)(a) GDPR when you consent to participate to such clinical researches and that your data needs to be processed for the aforementioned purposes. You may revoke/withdraw your consent at any time (more information about your data subject rights in section 8 below).
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing according to section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose.
3.8 Use of health data for statistical and research purposes
Types of data: Account ID (when applicable), case ID, profile ID (when applicable), age, gender, illness symptoms, geographic location, risk factors, assessment results such as potential causes of illness symptoms, medical history, allergies, time and date of assessment, and other relevant and related health data that you may have provided us.
Purpose of processing: We process pseudonymized data to carry out aggregate statistics on the geographical prevalence of certain types of illness symptoms and conditions and may present such summarized statistics to our partners, always on an irreversibly anonymized basis.
Use justification: The processing is necessary for statistical purposes and we only provide our partners with anonymized and summarized statistics from which the identification of a specific natural person is impossible (Article  9(2)(j) GDPR; Sec. 27 (1) BDSG). Our legitimate interest in processing data for these purposes is to support progress in medical research in line with our entrepreneurial goals which is also in the public interest to improve healthcare such as, but not limited to, analyzing the occurrence and characteristics of diseases. You may, for reasons arising from your particular situation, object to such a processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: The storage duration of your data on the basis of which we create the statistics corresponds to the period of processing according to section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose. The statistics are anonymous.
3.9 Use of health data for public health purposes
Types of data: Account ID (when applicable), profile name (when applicable), case ID, device ID, age, gender, illness symptoms, geographic location, risk factors, assessment results such as potential causes of illness symptoms, medical history, allergies, time and date of assessment, and other relevant and related health data that you may have provided us.
Purpose of processing: We process pseudonymized data for public health purposes (as defined by GDPR recital 54) such as analyzing case data regarding public health trends, rare diseases and threats, and to identify factors that could improve public health such as finding out about the prevalence of specific conditions, the attributes of specific conditions and get insights in specific aspects of assessments. With these analyses we help identify infectious disease outbreaks and monitor their timely and geographic developments (e.g. during COVID-19 pandemic). As our data is also including people who have not consulted yet the health care system, we can better estimate the true burden of diseases.  We may share and present the results as summarized statistics to our partners, e.g. in the public health and scientific community, always on an irreversibly anonymized basis. We may also process such types of data to provide you with the best guidance possible by, for example, directing you to the most appropriate care facility and help reduce unnecessary burden for you, but also for health care systems.
Use justification: The processing is necessary for reasons of public interest in the area of public health (Article 9(2)(i) GDPR, Article 22 (1)(1)(c) BDSG)). Our legitimate interest in processing data for these purposes is to support public health progress by protecting against serious cross- border threats to health. You may, for reasons arising from your particular situation, object to such a processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: The storage duration of your pseudonymized data on the basis of which we create the statistics corresponds to the period of processing according to Section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose.
3.10 Monitor and improve our Medical Device safety
Types of data: Symptoms of your disease, possible causes of your disease symptoms, account ID (when applicable), profile name (when applicable), age, gender, geographic location (country), IP address, device ID, any events while using the Medical Device such as, but not limited to, started assessment or finished assessment.
Purpose of processing: We use a limited set of usage data (that may include personal health data) both to monitor usability to ensure that our Medical Device complies with high safety and security standards required for medical devices, and to detect any potential malfunctions, incorrect assessments, or issues with availability or usability. For example, if you finish an assessment and mark it as ‘unhelpful’, then indicate it was unhelpful because it gave you the wrong result, access to this data helps our doctors check the assessment and decide if changing the question flow could improve medical safety. 
Use justification: The processing is required to comply with the necessary standards of quality and safety of our Medical Device which qualify as a medical device under medical device regulations and as provided in the following legal texts (section 22(1)(1)(c) BDSG, Article 9(2)(i) GDPR), on the basis of Post-Market Surveillance obligations under section 6(1)(2) MPG in connection with section (7)(4) of the German Medical Device Ordinance in connection with Annexes X, VII, (4) of the EU Medical Devices Directive (93/42/EC) (or directly applicable from 26.05.2021 at the latest, but to be considered as already applicable to ensure high standards of quality and safety of our Medical Device, Article 83 et seq. and Annex III of the EU Medical Devices Regulation (2017/745/EU)).
Storage duration: The storage duration of your data for this purpose corresponds with our obligation to comply with the necessary standards of quality and safety of our Medical Device.
3.11 Share limited information and increase Intelligent Symptomate’s impact
Types of data: Advertiser ID, download and installation of the App on your mobile device, information on how you found out about us (e.g. via social media or an online article), whether your registration and the creation of a new case with us was successful, and your rating of our App on the App Stores, geographical location, time and date.
Purpose of processing: We process some usage data (which does not include personal health data) if you are using the App, to understand how Intelligent Symptomate reaches people online. This helps us share relevant information with you and other potential users. For example, if you have already downloaded Intelligent Symptomate, this means you will no longer see ads asking you to download Intelligent Symptomate when you’re online. This information also helps us understand how we can reach more people online who may benefit from Intelligent Symptomate’s medical expertise. We only use pseudonymized usage data that we collect through our contract processor Adjust GmbH (Saarbrücker Str. 38a, 10405 Berlin, Germany). We will never share your personal health information with advertisers or third parties.
Use justification: Consent (Article 6 (1) (a) GDPR).
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. We will delete the data latest within 45 days. 
3.12 Monitor usage to ensure proper use, functioning, maintenance and improvement of the Services and related emails
Types of data: Device ID, IP address, operating system and browser type, length of visits to certain pages, and page interaction information such as scrolling, finger gestures, clicks, and mouse-overs, geographic location, time and date, any events while using the Medical Device such as, but not limited to, started assessment or finished assessment.
Purpose of processing: We use a limited set of usage data (which does not include personal health data) to ensure the proper use, functioning, maintenance and improvement of our Services for all users.
Use justification: Legitimate interest (Article 6(1)(f) GDPR). Our legitimate interest is based on the aforementioned use of that data purposes. Under no circumstances will we use the collected data to determine your identity. We may process the page interaction when you use our Services or receive emails we may send you to ensure proper reception and assess the service in order to improve it. You may, for reasons arising from your particular situation, object to such a legitimate processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: Your data is removed after 15 days, unless a security-relevant event occurs (e.g. a DDoS attack). If a security-relevant event occurs, log files of the servers are stored until the security-relevant event has been completely eliminated and clarified.
3.13 Direct marketing for our own similar products and services
Types of data: Email address, profile name, gender preference.
Purpose of processing: To receive direct marketing (products and services) or communication about any survey that we believe will be of interest to you. You can modify your marketing settings at any time by using the link at the bottom of each marketing email, or by sending your un- subscription request here.
Use justification: Legitimate interest (Article 6(1)(f) GDPR)
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.14 Optimizing our marketing initiatives
Types of data: Device ID, IP address, operating system and browser type, length of visits to certain pages, and page interaction information such as scrolling, finger gestures, clicks, and mouse-overs, geographic location, time and date.
Purpose of processing: We use a limited set of usage data (which does not include personal health data) to track your page interaction and analyze the data to optimize our marketing initiatives.
Use justification: Consent (Article 6 (1) (a) GDPR). You can customize your tracking settings at any time in the privacy settings in the App, or by writing us here. 
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected, or you revoke your consent. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2. The data we process for the purpose of tracking is removed latest within 45 days. 
3.15 Performance reports
Types of data: Error, crash reports including device, app and incident specific information (e.g. App Version), IP address, URL, geographic location, time and date.
Purpose of processing: We use the above data (which does not include personal health data) both to ensure the functionality of our Services (our Services cannot function properly without this processing) and to prevent any decompiling or otherwise reverse engineering. We only use pseudonymized usage data that we may collect via service of our processor Functional Software Inc., 132 Hawthorne Street, San Francisco, California 94107 USA (“Sentry”). This data may be transmitted to and stored on Sentry’s servers. For more information, please see Sentry’s privacy policy here. We may also send the above personal data to our processor Sumo Logic, a corporation headquartered at 305 Main Street, Redwood City, CA 94063, US. The data collected in the context is not used to link any usage profile with your personal data. Your personal data may be transmitted and stored into the servers of Sumo Logic. Further information can be found in Sumo Logic’s Privacy Statement here.
We also transfer the personal data to our processor Hound Technology, Inc., 548 Market Street, 25362 San Francisco, CA 94104-5401 (“Honeycomb”). The data processed in this context is pseudonymized and cannot be linked to you by Honeycomb. Intelligent Symptomate does not link any usage profile with your personal data. Further information can be found in Honeycomb’s Privacy Policy here.
We have agreed on Standard Contractual Clauses and additional contractual obligations with each of these service providers. In addition, we will assess, on a case-by-case basis, the risks for your rights and privacy, together with and the necessity to keep them to provide you with our Services. Should you have any question about the additional measures we put in place please feel free to contact us via email to dpo@Intelligent Symptomate.com.
Use justification: Legitimate interest (Article 6 (1) (f) GDPR). Our legitimate interest is based on the aforementioned use of that data purposes. Under no circumstances will we use the collected data to determine your identity.
Storage duration: Your data is removed after 60 days, unless a security-relevant event occurs (for example, a Distributed Denial of Service attack). If a security-relevant event occurs, log files of the servers are stored until the security-relevant event has been completely eliminated and clarified.
3.16 Feedbacks / Surveys
Types of data:  feedback that may contain some personal data, email address (optional), data provided in the case (only if you provide us with your email address and have created an account with us, which allows us to identify you, only for the purposes listed below).
Purpose of processing: We use the feedback you may provide us (optional) to analyze whether you are satisfied or dissatisfied with our products and Services, and to assess your general experience with it. This is a fundamental resource for us to improve your user experience and adjust our actions to your needs. We may also use the feedback you may provide us (optional) to guarantee high quality and safety standards of our Medical Device, as described in section 3.5 above.
Use justification: Legitimate interest (Article 6(1)(f) GDPR): to improve your user experience and adjust our actions to your needs. Under no circumstances will we use the collected data to determine your identity.
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.17 Web-based Registration and Results Tool
Types of data: Account ID, name, address, date of birth, sex at birth, e-mail address, test results 
Purpose of processing: We provide you with the web-based registration and results tool (“Registration and Results Tool”) in cooperation with Labor Berlin – Charité Vivantes GmbH. We process your data to submit your registration to Labor Berlin and communicate the test results to you. In addition, we use the above data to provide you with a user account. Labor Berlin is the sole controller for the processing related to the carrying out of the test. We are the controller for the processing related to your use of the Registration and Results Tool. 
Purpose of processing: Contract performance (Article 6(1)(b) GDPR / Consent (Article 9(2)(a) GDPR for your health data). You may revoke/withdraw your consent at any time; however, it is not possible to provide you with our Registration and Results Tool without such consent.
Storage duration: We process your data for the purposes specified above until you request deletion of your account or when you delete your account. If your account is inactive for more than 24 months, we will contact you to check whether you wish to continue using our Registration and Results Tool. If you then leave your user account unused for another 3 months, we will delete your account. In either case, we will delete your account within 1 month and delete or irreversibly anonymize your data (such that it cannot be associated with a specific natural person). We will further retain your data (see section 7 for more details), e.g. for the purposes of establishing, exercising or defending against legal claims but we will not process the data for any other purposes.
3.18 Job application
Types of data: first name, last name, email address, phone number, geographic location (city), resume, LinkedIn profile (optional), time and date of the application.
Purpose of processing: If you are an applicant on our Website, we may process the above data in order to check your suitability for the position (or any other vacancies within our company) and to conduct the application process.
Use justification: To take steps at your request prior to entering into a contract (Article 6(1)(b) GDPR).
Storage duration: In the event of a rejection, candidate data will be deleted after 6 months. If you have agreed to further storage of your personal data, we will add your data to our applicant pool. The data will be deleted after two years from that moment. If you are offered a job in the context of the application process, the data from the data system will be transferred to our Human Resources information system.
4. Cookies and tracking on our Website
Our Website uses so-called “cookies”. Cookies are text files that are stored in the Internet browser or by the Internet browser on your device (computer, tablet, or phone). We use the term “cookies” to refer to all tools that collect data on our Website (e.g. IP addresses, place and time of the visit). Your data collected in this way is pseudonymized, and is not stored together with your other personal data. This processing is carried out on a legal basis and, where required by law, based on your consent.

For detailed information on the cookies we use, the purposes for which we use them and to manage your Cookie preferences, see our Cookie Policy.

5. Where do we store your personal data
The personal data that we collect from you is stored in the European Union on Cloud Servers of Amazon Web Services EMEA S.A.R.L. (“AWS”) with a business seat in Luxembourg and on the Cloud Servers of Google Commerce Limited ("GCL"), a company incorporated under the laws of Ireland, with its offices at Gordon House, Barrow Street, Dublin 4, Ireland. This data may, however, be processed by sub- processors operating outside of the European Economic Area (“EEA”) based on a data processing agreement, as long as the additional requirements of Article 44 et seq. GDPR for the processing of personal data in third countries are met (e.g. if the sub-processor can provide appropriate safeguards under Article 46 GDPR , such as but not limited to standard data protection clauses, binding corporate rules, approved code of conduct or exceptional circumstances under Article 49 GDPR) and any necessary additional measures based on case-by-case assessments.

Sensitive information between your browser and our Website is transferred in encrypted form using Transport Layer Security (“TLS”). When transmitting sensitive information, you should always make sure that your browser can validate our certificate.

Please contact us if you would like further details on the specific safeguards applied to the export of your personal data outside the EEA.

6. Disclosure of your personal data
6.1 We use technical service providers to operate and maintain our Services, who act as our processors based on a data processing agreement. A full list of our third-party processors processing your personal data on our behalf and strictly according to section 3 above can be found here. Service providers who process personal data on our behalf outside the EEA (or “third countries”) will only be used if the recipient has received a European Commission decision on appropriateness or suitable or appropriate guarantees for this third country. In addition, we do not transfer your personal data to third parties - with the exception, when applicable, of the purposes listed below.

Use justification: The legal basis for the transfer and processing of your personal data by the processor corresponds to the legal basis on which we, as data controller, rely (always in compliance with section 3 above).
6.2 If we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer of such business or assets.

Use justification: Legitimate interest (Article 6(1)(f) GDPR): to sell our business or assets / where required by applicable law: consent (Article 9(2)(a) GDPR): for the processing of special categories of data, i.e. your personal health data.
6.3 If we or, substantially, all of our assets are acquired by a third party, personal data about our users will be one of the transferred assets.

Use justification: Legitimate interest (Article 6(1)(f) GDPR): to sell our company or assets / where required by applicable law: consent (Article 9(2)(a) GDPR): for the processing of special categories of data, i.e. your personal health data.
6.4 If we are required on the basis of EU law or the law of a Member State to disclose or share your personal data.

Use justification: Legal obligation (Article 6(1)(c) GDPR).
6.5 We may disclose certain data to organizations involved in clinical trials and other types of research where you have explicitly authorized us to do so.

Use justification: Consent (Article 9(2)(a) GDPR).
7. How long do we retain your personal data
We will hold your personal data for as long as it is necessary or required by law or by any relevant regulatory body, and always in compliance with the data minimization principle. Specific storage periods for the respective processing activities are detailed in section 3 above.

If your personal data is used for more than one purpose, we will retain it until the purpose with the longest period expires, but we will stop using it for the purpose with the shorter period as soon as the shorter period expires (to comply with the purpose limitation principle). We restrict access to your personal data to the persons who need to use it for the relevant purpose(s), always in compliance with the integrity and confidentiality principle. 

After the processing of your data is no longer necessary for the purposes outlined in section 3 or your account is deleted (see section 3.2) we will securely and separately store some of your data in accordance with statutory retention obligations applicable to us and reasonable business needs. 

We will retain accounting data in accordance with the commercial and tax law storage obligations of six or ten years (§ 147 German Tax Code, § 257 German Commercial Code).

We will retain Post-Market-Surveillance data (incl. health data) in accordance with our storage obligations according to the medical device law.

We will retain data (incl. health data) in relation to your use of our Services for three or ten years in accordance with our business needs for the purposes of establishing, exercising or defending against legal claims. 

If you were a user of the UK Doctor Chat services (which is no longer available since 23 March 2018), your consultation details may be retained by us for a period up to 10 years according to the UK Records Management Code of Practice Retention Schedule, or if otherwise required by Care Quality Commission (“CQC”).

If the processing of your personal data is no longer necessary for any purpose it is either irreversibly anonymized (and the anonymized data may be retained), or securely erased.

8. Your data subject’s rights
Under GDPR you have various rights in relation to your personal data (as listed below). All of these rights can be exercised by contacting us via our contact form, by selecting “Exercising My Data & Privacy Rights”.

Verification: in order to verify your request, we will take reasonable steps such as asking you to send us a confirmation from the email address associated with your account, so that we can verify that you are the owner of this email account. If there is no email address associated with your account, we may ask you for proof of ID.

Right to withdraw consent: Where the processing of your data relies on your prior consent, you have the right to withdraw such a consent at any time by notifying us here. By withdrawing your consent, the lawfulness of the processing based on consent up until the point of withdrawal will not be affected. 
Right to object: You have a right to object under the conditions of Article 21 GDPR. Below you will find more detailed information:
— Right to object where the processing is based on legitimate interests: As a data subject, you have the right to object on grounds relating to your particular situation, at any time, to the processing of your personal data which is based on Article 6(1)(e) or (f) GDPR, including profiling based on those provisions. In the event of an objection relating to your particular situation, we will no longer process your personal data, unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or for the establishment, exercise or defense of legal claims. 
— Right to object where we process your personal data for statistical purposes: If we process your personal data for statistical purposes pursuant to Article 9(2)(j) GDPR / section 27(1) BDSG, you have the right to object to such processing for reasons arising from your particular situation. In the event of such an objection, we will no longer process the personal data concerned for this purpose, unless the processing is necessary to fulfil a task in the public interest, or if the discontinuation of such a processing is likely to make it impossible or seriously impair the realization of statistical purposes and the continuation of processing is necessary for the fulfilment of statistical purposes.
— Right to object where we process your personal data for public health purposes: If we process your personal data for public health purposes pursuant to Article 9(2)(i) GDPR, / section 22 (1)(1)(c) BDSG, you have the right to object to such processing for reasons arising from your particular situation. In the event of such an objection, we will no longer process the personal data concerned for this purpose, unless the processing is necessary to fulfil a task in the public interest, or if the discontinuation of such a processing is likely to make it impossible or seriously impair the realization of public health purposes and the continuation of processing is necessary for the fulfilment of public health purposes.
— Right to object to direct marketing: Where your personal data are processed for direct marketing purposes, you have the right to object at any time to processing of your personal data for such marketing, which includes profiling to the extent that it is related to such direct marketing. If you object to processing for direct marketing purposes, we no longer process your personal data for these purposes. To exercise your rights of objection, you may reply by email to the direct marketing email you receive from us, or contact us at any time here. 
Right to be informed: As a data subject, you have a right to obtain access and information under the conditions provided in Article 15 GDPR. This means in particular that you have the right to obtain confirmation from us as to whether we are processing your personal data or not. If so, you also have the right to obtain access to the personal data and the information listed in Article 15(1) GDPR. This includes information regarding the purposes of the processing, the categories of personal data that are being processed, and the recipients or categories of recipients to whom the personal data have been or will be disclosed.
Right to erasure / ‘Right to be forgotten’: As a data subject, you have a right to erasure (“right to be forgotten”) under the conditions provided in Article 17 GDPR. This means that you generally have the right to obtain from us the erasure of your personal data and we are obliged to erase your personal data without undue delay when one of the reasons listed in Article 17(1) GDPR applies. You can do this by deleting your account, in the App, at any time. If we have made the personal data public and are obliged to erase it, we are also obliged, taking account of available technology and the cost of implementation, to take reasonable steps, including technical measures, to inform controllers which are processing the personal data that you have requested the erasure by such controllers of any links to, or copy or replication of those personal data (Article 17(2) of the GDPR. The right to erasure (“right to be forgotten”) does not by exception apply if the processing is necessary for one of the reasons listed in Article 17(3) GDPR. This can be the case, for example, if the processing is necessary for compliance with a legal obligation or for the establishment, exercise or defense of legal claims (Article 17(3)(b) and (e) GDPR).
Right to restriction of processing: As a data subject, you have a right to restriction of processing under the conditions provided in Article 18 GDPR. This means that you have the right to obtain from us the restriction of processing if one of the conditions provided in Article 18(1) GDPR applies. This can be the case, for example, if you contest the accuracy of the personal data. In such a case, the restriction of processing lasts for a period that enables us to verify the accuracy of the personal data (Article 18(1)(a) GDPR). Restriction means that stored personal data are marked with the goal of restricting their future processing (Article 4(3) GDPR).
Right to data portability: As a data subject, you have a right to data portability under the conditions provided in Article 20 GDPR. This means that you generally have the right to receive your personal data with which you have provided us in a structured, commonly used and machine-reIntelligent Symptomateble format, and to transmit those data to another controller without hindrance from us where the processing is based on consent (pursuant to Article 6(1)(a) or Article 9(2)(a) GDPR or on a contract (pursuant to Article 6(1)(b) GDPR), and where the processing is carried out by automated means (Article 20(1) GDPR). In exercising your right to data portability, you also generally have the right to have your personal data transmitted directly from us to another controller where technically feasible (Article 20(2) GDPR). 
Right to Rectification: As a data subject, you have the right to rectification under the conditions provided in Article 16 GDPR. This means in particular that you have the right to receive from us, without undue delay, the rectification of inaccuracies in your personal data and completion of incomplete personal data.
Right to complain: As a data subject, you have a right to lodge a complaint with a supervisory authority under the conditions provided in Article 77 GDPR. The supervisory authority responsible for us is the Berlin Data Protection Authority in Germany (Berliner Beauftragte für Datenschutz und Informationsfreiheit, Address: Friedrichstr. 219, 10969 Berlin; Telephone: 030 13889-0; E-Mail: mailbox@datenschutz-berlin.de).
Asking us to stop processing your personal data or deleting your personal data will likely mean that you are no longer able to use our Services, or at least those aspects of the Services which require the processing of the types of personal data you have asked us to delete, which may result in you no longer being able to use the Services.

9. Privacy information for California residents
If you are a California resident (as defined in the section 17014 of Title 18 of the California Code of Regulations), California law requires us to provide you with some additional information regarding your rights with respect to your “personal information” (as defined in the California Consumer Privacy Act (hereinafter the “CCPA”) that came into force on January 1st, 2020).

We did not during the preceding 12 months, do not currently, and will not in the future sell or transfer your personal data to third parties (and will never do it without providing a right to opt out).

We may transfer your personal data to third party processors in order to achieve the purposes of the processing listed in Section 3 above, but only with the third-party processors with whom we have a data protection agreement in place. A full list of our third-party processors can be found here.

CCPA provides Californian consumers the following rights (which does not interfere with GDPR):

Right to request disclosure of any personal information we collected (Article (1798.100) (a) CCPA). This means in particular that you have the right to request disclosure of the categories of personal information we collected from you, together with the categories of sources from which it was collected, the purpose of the collection, the categories of third parties with whom we shared your personal information, and the specific pieces of personal information that have been collected (Article 1798.110 (a) CCPA).
Right to request deletion of any personal information that we collected from you (Article (1798.105) CCPA). This means that after we have verified your request to delete your personal information, we shall delete it from our records and direct any service providers to delete your personal information from their records, except when Article 1798.105 (d) CCPA is applicable (e.g. in case the personal information is necessary to provide the Services, to detect security incidents, to identify and repair errors that impair existing intended functionality of the Services, to engage statistical research in the public interest, or to comply with a legal obligation).
In addition to the possibility to contact us through our contact form by selecting “Exercising My Data & Privacy Rights”, you can exercise any rights under CCPA or request further information regarding your rights by calling us through our hotline.

10. Privacy Information for Brazilian residents
If you are a Brazilian resident, Brazilian law requires us to provide you with some additional information regarding your rights with respect to your “personal information” (as defined in the “Lei Geral de Proteção de Dados” (hereinafter the “LGPD”) that came into force on September 18th, 2020).

To find out what categories of your personal information are processed and what are the purposes of, you can read the section 3 titled “Which personal data we may collect and process, why and for how long” within this document.

We can process your personal information solely if we have a legal basis for such processing. Legal bases are as follows:

your consent to the relevant processing activities;
protection or physical safety of yourself or a third party;
compliance with a legal or regulatory obligation that lies with us;
the carrying out of public policies provided in laws or regulations or based on contracts, agreements and similar legal instruments;
studies conducted by research entities, preferably carried out on anonymized personal information;
the carrying out of a contract and its preliminary procedures, in cases where you are a party to said contract;
the exercising of our rights in judicial, administrative or arbitration procedures;
the protection of health – in procedures carried out by health entities or professionals;
our legitimate interests, provided that your fundamental rights and liberties do not prevail over such interests; 
10.1 Your Brazilian privacy rights
You have the right to:

obtain confirmation of the existence of processing activities on your personal information;
access to your personal information;
have incomplete, inaccurate or outdated personal information rectified;
obtain the anonymization, blocking or elimination of your unnecessary or excessive personal information, or of information that is not being processed in compliance with the LGPD;
obtain information on the possibility to provide or deny your consent and the consequences thereof;
obtain information about the third parties with whom we share your personal information;
obtain, upon your express request, the portability of your personal information (except for anonymized information) to another service or product provider, provided that our commercial and industrial secrets are safeguarded;
obtain the deletion of your personal information being processed if the processing was based upon your consent, unless one or more exceptions provided for in art. 16 of the LGPD apply;
revoke your consent at any time;
lodge a complaint related to your personal information with the ANPD (the National Data Protection Authority) or with consumer protection bodies;
oppose a processing activity in cases where the processing is not carried out in compliance with the provisions of the law;
request clear and adequate information regarding the criteria and procedures used for an automated decision; and
request the review of decisions made solely on the basis of the automated processing of your personal information, which affect your interests. These include decisions to define your personal, professional, consumer and credit profile, or aspects of your personality.
You will never be discriminated against, or otherwise suffer any sort of detriment, if you exercise your rights.

10.2 How to file your request
You can file your express request to exercise your rights free from any charge, at any time, by using the contact details provided in this document (e.g. an email at dpo@Intelligent Symptomate.com), or via your legal representative.

10.3 How and when we will respond to your request
We will strive to promptly respond to your requests.

In any case, should it be impossible for us to do so, we’ll make sure to communicate to you the factual or legal reasons that prevent us from immediately, or otherwise ever, complying with your requests. In cases where we are not processing your personal information, we will indicate to you the physical or legal person to whom you should address your requests, if we are in the position to do so.

In the event that you file an access or personal information processing confirmation request, please make sure that you specify whether you’d like your personal information to be delivered in electronic or printed form.

You will also need to let us know whether you want us to answer your request immediately, in which case we will answer in a simplified fashion, or if you need a complete disclosure instead.

In the latter case, we’ll respond within 15 days from the time of your request, providing you with all the information on the origin of your personal information, confirmation on whether or not records exist, any criteria used for the processing and the purposes of the processing, while safeguarding our commercial and industrial secrets.

In the event that you file a rectification, deletion, anonymization or personal information blocking request, we will make sure to immediately communicate your request to other parties with whom we have shared your personal information in order to enable such third parties to also comply with your request – except in cases where such communication is proven impossible or involves disproportionate effort on our side.

10.4 Transfer of personal information outside of Brazil permitted by the law
As Intelligent Symptomate is based in Germany we only transfer your data including health related data to Germany to provide our services. In addition to that Intelligent Symptomate uses third party services outlined in section 3 to transfer data to third countries.

We are allowed to transfer your personal information outside of the Brazilian territory in the following cases:

when the transfer is necessary for international legal cooperation between public intelligence, investigation and prosecution bodies, according to the legal means provided by the international law;
when the transfer is necessary to protect your life or physical security or those of a third party;
when the transfer is authorized by the ANPD;
when the transfer results from a commitment undertaken in an international cooperation agreement;
when the transfer is necessary for the execution of a public policy or legal attribution of public service;
when the transfer is necessary for compliance with a legal or regulatory obligation, the carrying out of a contract or preliminary procedures related to a contract, or the regular exercise of rights in judicial, administrative or arbitration procedures.
11. Changes to this policy
Any changes we make to our Privacy Policy in the future will be posted on this page, and where appropriate, notified to you by email, notifications via the App, or by any other available means. We therefore encourage you to review it from time to time to stay informed about the way we are processing your data.</p>
            </div>
        </div>
      </div>
    </BrowserView>
    <MobileView>
      <div
        style={{
          paddingTop: "5%",
          textAlign: "center"
        }}
      >
        <div
          style={{
            border: "1px solid #DCDCDC",
            backgroundColor: "#fff",
            padding: "7%",
            alignItems: "center"
          }}
        >
          <h5>Add medication</h5>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5%",

              justifyContent: "center",
              alignItems: "center"
            }}
          >
             <h3>Intelligent Symptomate Health GmbH Privacy Policy</h3>
          <p>You must be 16 years or older to use our Services.

Protecting your data, privacy and personal data (as defined under Article 4(1) of the General Data Protection Regulation (EU) 2016/679 (“GDPR”)) is very important to Intelligent Symptomate Health GmbH (“us”, “our” or “we”). It is vitally important to us that our customers (the “users”) feel secure when using our products and services.

This privacy policy (the “Privacy Policy”), together with our Terms & Conditions at Intelligent Symptomate.com/terms-and-conditions, our Cookie Policy at Intelligent Symptomate.com/cookie-policy and any other documents referred therein, sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed. Please read this Privacy Policy carefully to understand the types of data we collect from you, how we use it, the circumstances under which we will share it with third parties, and your rights in relation to your personal data.

When using “Intelligent Symptomate” (through our mobile application (the “App”), when and where available our web-based application (the “Web-embed”) and our screening tool (the “Screening Tool”), together the “Medical Device”), or when accessing our website Intelligent Symptomate.com (the “Website”) or any service and/or product we may provide you (Website together with the Medical Device and any of our product and services, the “Services”), you will be asked to indicate your acknowledgment of, and where applicable, give your consent to the processing activities as described in this Privacy Policy.

1. Who we are
This Privacy Policy applies to any personal data processed by Intelligent Symptomate Health GmbH (HRB 189710), Karl- Liebknecht-Straße 1, 10178 Berlin, Germany being the data controller (as defined under Article 4(7) GDPR) of all processing activities in connection with the Services.

Questions, comments and requests regarding this Privacy Policy are welcome and should be addressed through our contact form here. Our data protection officer can be contacted at dpo@Intelligent Symptomate.com.

2. General overview of the data processing in connection with the Services
Before starting using our Services, you have to confirm that you have read our Privacy Policy carefully, and to consent to Intelligent Symptomate analyzing the personal health data you supply in order to be provided with an assessment and health advice, for which you can find an information summary here.

This section 2 aims at giving you a quick high-level overview of the data processing activities in connection with the Services we provide you.

If you wish to read in detail all the data processing activities we undertake, we advise you to read the following section 3 relating to each specific data processing activity, and sections 4 to 9 that relate to:

our cookies & tracking policy (section 4), 
where we store your personal data (section 5), 
when we may disclose your personal data (section 6), 
our retention policy (section 7), 
your data subjects’ rights (section 8),
your specific rights if you are a California resident (US) (section 9), and
our changes policy (section 10).
Information that you provide to us: we may collect and process personal data that you will be asked to provide when you:

fill in forms on our Website, apply for a job offer or otherwise correspond with us by any available means;
register to use our Services, subscribe to our newsletter, receive promotional emails or any other marketing materials;
use our Services;
report a problem with our Services; or
complete any surveys or provide any feedback that we may use for research and improvement purposes (although it is optional, and you do not have to respond to these if you do not want to).
The information that we may ask you to provide includes, but is not limited to, your name, gender, date of birth, email address, phone number, symptoms of your illness, potential causes of your illness symptoms, health insurance (optional), medical history, any allergies you have, or further information required to verify your identity.

Information we collect about you: although we will not use it to identify you, we may collect the following data during each of your visits and use of our Services:

Usage data: technical information about your device, including device-specific information such as your hardware model, operating system version, unique device identifiers, and mobile network information; details of your visits, including the full Uniform Resource Locators (“URL”) clickstream to, through and from our Services (including date and time); details of conditions and symptoms searched;
Analytics data: your IP address, operating system and browser type; information about which app store you downloaded our App from; length of visits to certain pages, and page interaction information (such as scrolling, finger gestures, clicks, and mouse-overs)
If you are using our Services on behalf of a third party, you must have obtained clear permission from the individuals whose data you provide us with before sharing that data. For the avoidance of any doubt, any reference in this Privacy Policy to “your data” shall include data about other individuals that you have provided us with.

Our Website may contain links to third-party websites. If you follow a link to any of those third-party websites, please note that they have their own privacy policies and that we do not accept any responsibility or liability for their policies or processing of your personal data. Please check these policies before you submit any personal data to such third-party websites.

3. Which personal data we may collect and process, why and for how long
3.1 When you use our Website
Types of data: IP address of the requesting device, date and time of access, name and URL of the requested file, website from which access is obtained (“Referrer URL”), browser used and, where applicable, your device’s operating system and the identity of your access provider.
Purpose of processing: We use the above data to provide you with access to our Website, ensure that the Website can establish an internet connection smoothly and is easy to use, and to analyze the system security and stability, as well as for additional administrative purposes.
Use justification: Legitimate interest (Article 6(1)(f)GDPR). Our legitimate interest is based on the data collection purposes listed under “Purpose of processing”. We do not use the data collected for the purpose of identifying you. You are not obliged to provide the above personal data; however, you will not be able to access the Website if such personal data are not provided.
Storage duration: Your data is removed after 15 days, unless any security-relevant event occurs (e.g. a DDoS attack). If there is a security-relevant event, server log files are stored until the security-relevant event has been eliminated and clarified in full.
3.2 When you register a user account or create a new profile
Types of data: Email address and password, account ID, device ID, profile name, gender, date of birth, health insurance (optional), general data about your health (optional) such as smoking, increased blood pressure, diabetes, and pregnancy status, date, time and location of registration.
Purpose of processing: We use the above data to provide you with a user account and access to our Medical Device. We use the general health data for the basic analysis. It is not possible to access our Medical Device if the (non-optional) data are not provided. If you use our Medical Device through a Web-embed application, with your consent we may disclose pseudonymized usage data (not including any personal health data) to the partner that hosts the Web-embed. 
Use justification: Contract performance (Article 6(1)(b)GDPR / Consent (Article9(2)(a) GDPR) for the processing of your health data.
Storage duration: We process your data for the purposes specified above until you request deletion of your account or when you delete your account. If your account is inactive for more than 24 months, we will contact you to check whether you wish to continue using our Medical Device. If you then leave your user account unused for another 3 months, we will delete your account. In either case, we will delete your account within 1 month and delete or irreversibly anonymize your data (such that it cannot be associated with a specific natural person). We will further retain your data (see section 7 for more details), e.g. for the purposes of establishing, exercising or defending against legal claims and to comply with high quality and safety standards, in particular our Post-Market Surveillance obligations but we will not process the data for any other purposes. 
3.3 Health profile
Types of data: Body height and weight, any medication you are taking (permanently or not) and any allergies you may have.
Purpose of processing: This feature allows you to create a comprehensive health profile to manage your health data in our Medical Device. However, we will not process the data you provide for the creation of the health profile to determine the assessment results in accordance with section 3.5.
Use justification: Consent (Article 9(2)(a) GDPR). You may revoke/withdraw your consent at any time.
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.4 Facebook Login / Apple Login
Types of data: Facebook ID, Apple user ID, email address (if you authorize Facebook to share the address with us), time and date of the login.
Purpose of processing: If you choose to use and login with Facebook or Apple, we will receive the data listed above from Facebook or Apple with your approval to populate your user data in the App, and to verify your identity. Please note that if you use the Facebook login or the Apple login, Facebook or Apple may also process your data (Facebook ID/ Apple ID, metIntelligent Symptomateta, some app events and device metric). We are not responsible for this data processing; you can learn more about this in Facebook’s Privacy Policy / Apple's Privacy Policy.
Use justification: Legitimate interest (Article 6(1)(f) GDPR). Our legitimate interest is to provide users who do not have an email account or who wish to log in with their Facebook account or Apple account the option to use our Services / Contract performance (Article 6 (1)(b) / Consent (Article 6 (1)(a) GDPR). 
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing in accordance with section 3.2. Data processed by Facebook or Apple, which we do not control if you choose to use Facebook login or Apple login, may remain in Facebook’s servers or Apple’s servers. Should you delete your Facebook account or stop using your Apple device and wish to use the App, you will be directed to sign-in with an email or other login procedure.
3.5 Create an assessment case
Types of data: profile ID, profile name (when applicable) and related personal health data required to provide the assessment such as age, gender, illness symptoms, potential causes of illness symptoms, allergies, pregnancy status, relevant and/or related medical history, geographic location, time and date of assessment.
Purpose of processing: To provide you with our assessment by means of our Medical Device, for example but not limited to, suggest possible causes for the given symptoms (assessment), and track your symptoms.
Use justification: Contract performance (Article 6(1)(b) GDPR / Consent (Article 9(2)(a)GDPR) for the processing of your health data. You may revoke/withdraw your consent at any time; however, it is not possible to provide you with our Medical Device (i.e. the assessment) without such consent.
Storage duration: As a rule, the storage duration corresponds to the period of processing according to section 3.2. In addition, you may request the deletion of a specific case or delete the case yourself. We will then delete or irreversibly anonymize your case data (such that it cannot be associated with a specific natural person) within 1 month. We will further retain some of your data (see section 7 for more details) but we will not process the data for any other purposes.
3.6 Analysis of case information to guarantee high quality and safety standards of our Medical Device
Types of data:  Account ID (when applicable), profile ID (when applicable), case ID, time and date of assessment, geographic location of assessment, data provided in a case (personal health data required to provide the assessment such as age, gender, illness symptoms, potential causes of illness symptoms, allergies, pregnancy status, and relevant and/or related medical history), feedback, assessment result, and data related to software and hardware (such as version numbers, operating system, and device ID).
Purpose of processing: To guarantee high quality and safety standards of our Medical Device, it is necessary to review the quality of the assessment results (the “Analysis”). The safety and quality staff (the “Medical Experts”) use pseudonymized data and, when applicable, aggregated data to evaluate the assessment results and determine if any improvement is needed in order for our Medical Device to meet the highest quality and safety standards.
Use justification: The processing is required to comply with the necessary standards of quality and safety of our Medical Device which qualify as a medical device under medical device regulations and as provided in the following legal texts (section 22(1)(1)(c) BDSG, Article 9(2)(i) GDPR), on the basis of Post-Market Surveillance obligations under Sec. 6 (1),(2) MPG in connection with section (7)(4) of the German Medical Device Ordinance in connection with Annexes X, VII, (4) of the EU Medical Devices Directive (93/42/EC) (or directly applicable from 26.05.2021 at the latest, but to be considered as already applicable to ensure high standards of quality and safety of our Medical Device, Article 83 et seq. and Annex III of the EU Medical Devices Regulation (2017/745/EU)).
Storage duration: We process your data until no longer necessary for the purposes specified above. The storage duration of your data for this purpose corresponds with our obligation to comply with the necessary standards of quality and safety of our App.
3.7 Assessing your suitability for and inviting you to clinical research and referring you to health services for follow-up diagnostics
Types of data: Email address, account ID, profile name, date of birth, illness symptoms, potential causes of illness symptoms, medical history, allergies, geographic location, time and date of assessment, and other data that you have provided to us.
Purpose of processing: We use the above data to assess your suitability for clinical research and to reach out in order to invite you to partake in clinical research with one of our clinical research partners that may be of interest to you and/or to refer you to health services for follow-up diagnostics. For the avoidance of doubt, we do not pass on any personal data to our clinical research partners without your consent and any participation to such clinical researches and referrals to health services are optional and subject to your prior consent.
Use justification: Consent (Article 6(1)(a) and Article 9(2)(a) GDPR when you consent to participate to such clinical researches and that your data needs to be processed for the aforementioned purposes. You may revoke/withdraw your consent at any time (more information about your data subject rights in section 8 below).
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing according to section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose.
3.8 Use of health data for statistical and research purposes
Types of data: Account ID (when applicable), case ID, profile ID (when applicable), age, gender, illness symptoms, geographic location, risk factors, assessment results such as potential causes of illness symptoms, medical history, allergies, time and date of assessment, and other relevant and related health data that you may have provided us.
Purpose of processing: We process pseudonymized data to carry out aggregate statistics on the geographical prevalence of certain types of illness symptoms and conditions and may present such summarized statistics to our partners, always on an irreversibly anonymized basis.
Use justification: The processing is necessary for statistical purposes and we only provide our partners with anonymized and summarized statistics from which the identification of a specific natural person is impossible (Article  9(2)(j) GDPR; Sec. 27 (1) BDSG). Our legitimate interest in processing data for these purposes is to support progress in medical research in line with our entrepreneurial goals which is also in the public interest to improve healthcare such as, but not limited to, analyzing the occurrence and characteristics of diseases. You may, for reasons arising from your particular situation, object to such a processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: The storage duration of your data on the basis of which we create the statistics corresponds to the period of processing according to section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose. The statistics are anonymous.
3.9 Use of health data for public health purposes
Types of data: Account ID (when applicable), profile name (when applicable), case ID, device ID, age, gender, illness symptoms, geographic location, risk factors, assessment results such as potential causes of illness symptoms, medical history, allergies, time and date of assessment, and other relevant and related health data that you may have provided us.
Purpose of processing: We process pseudonymized data for public health purposes (as defined by GDPR recital 54) such as analyzing case data regarding public health trends, rare diseases and threats, and to identify factors that could improve public health such as finding out about the prevalence of specific conditions, the attributes of specific conditions and get insights in specific aspects of assessments. With these analyses we help identify infectious disease outbreaks and monitor their timely and geographic developments (e.g. during COVID-19 pandemic). As our data is also including people who have not consulted yet the health care system, we can better estimate the true burden of diseases.  We may share and present the results as summarized statistics to our partners, e.g. in the public health and scientific community, always on an irreversibly anonymized basis. We may also process such types of data to provide you with the best guidance possible by, for example, directing you to the most appropriate care facility and help reduce unnecessary burden for you, but also for health care systems.
Use justification: The processing is necessary for reasons of public interest in the area of public health (Article 9(2)(i) GDPR, Article 22 (1)(1)(c) BDSG)). Our legitimate interest in processing data for these purposes is to support public health progress by protecting against serious cross- border threats to health. You may, for reasons arising from your particular situation, object to such a processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: The storage duration of your pseudonymized data on the basis of which we create the statistics corresponds to the period of processing according to Section 3.2. When you request deletion of a specific case or if you delete a case in the App, your case data will no longer be used for this purpose.
3.10 Monitor and improve our Medical Device safety
Types of data: Symptoms of your disease, possible causes of your disease symptoms, account ID (when applicable), profile name (when applicable), age, gender, geographic location (country), IP address, device ID, any events while using the Medical Device such as, but not limited to, started assessment or finished assessment.
Purpose of processing: We use a limited set of usage data (that may include personal health data) both to monitor usability to ensure that our Medical Device complies with high safety and security standards required for medical devices, and to detect any potential malfunctions, incorrect assessments, or issues with availability or usability. For example, if you finish an assessment and mark it as ‘unhelpful’, then indicate it was unhelpful because it gave you the wrong result, access to this data helps our doctors check the assessment and decide if changing the question flow could improve medical safety. 
Use justification: The processing is required to comply with the necessary standards of quality and safety of our Medical Device which qualify as a medical device under medical device regulations and as provided in the following legal texts (section 22(1)(1)(c) BDSG, Article 9(2)(i) GDPR), on the basis of Post-Market Surveillance obligations under section 6(1)(2) MPG in connection with section (7)(4) of the German Medical Device Ordinance in connection with Annexes X, VII, (4) of the EU Medical Devices Directive (93/42/EC) (or directly applicable from 26.05.2021 at the latest, but to be considered as already applicable to ensure high standards of quality and safety of our Medical Device, Article 83 et seq. and Annex III of the EU Medical Devices Regulation (2017/745/EU)).
Storage duration: The storage duration of your data for this purpose corresponds with our obligation to comply with the necessary standards of quality and safety of our Medical Device.
3.11 Share limited information and increase Intelligent Symptomate’s impact
Types of data: Advertiser ID, download and installation of the App on your mobile device, information on how you found out about us (e.g. via social media or an online article), whether your registration and the creation of a new case with us was successful, and your rating of our App on the App Stores, geographical location, time and date.
Purpose of processing: We process some usage data (which does not include personal health data) if you are using the App, to understand how Intelligent Symptomate reaches people online. This helps us share relevant information with you and other potential users. For example, if you have already downloaded Intelligent Symptomate, this means you will no longer see ads asking you to download Intelligent Symptomate when you’re online. This information also helps us understand how we can reach more people online who may benefit from Intelligent Symptomate’s medical expertise. We only use pseudonymized usage data that we collect through our contract processor Adjust GmbH (Saarbrücker Str. 38a, 10405 Berlin, Germany). We will never share your personal health information with advertisers or third parties.
Use justification: Consent (Article 6 (1) (a) GDPR).
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. We will delete the data latest within 45 days. 
3.12 Monitor usage to ensure proper use, functioning, maintenance and improvement of the Services and related emails
Types of data: Device ID, IP address, operating system and browser type, length of visits to certain pages, and page interaction information such as scrolling, finger gestures, clicks, and mouse-overs, geographic location, time and date, any events while using the Medical Device such as, but not limited to, started assessment or finished assessment.
Purpose of processing: We use a limited set of usage data (which does not include personal health data) to ensure the proper use, functioning, maintenance and improvement of our Services for all users.
Use justification: Legitimate interest (Article 6(1)(f) GDPR). Our legitimate interest is based on the aforementioned use of that data purposes. Under no circumstances will we use the collected data to determine your identity. We may process the page interaction when you use our Services or receive emails we may send you to ensure proper reception and assess the service in order to improve it. You may, for reasons arising from your particular situation, object to such a legitimate processing at any time by writing us here (more information about your right to object in Section 8 below).
Storage duration: Your data is removed after 15 days, unless a security-relevant event occurs (e.g. a DDoS attack). If a security-relevant event occurs, log files of the servers are stored until the security-relevant event has been completely eliminated and clarified.
3.13 Direct marketing for our own similar products and services
Types of data: Email address, profile name, gender preference.
Purpose of processing: To receive direct marketing (products and services) or communication about any survey that we believe will be of interest to you. You can modify your marketing settings at any time by using the link at the bottom of each marketing email, or by sending your un- subscription request here.
Use justification: Legitimate interest (Article 6(1)(f) GDPR)
Storage duration: The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.14 Optimizing our marketing initiatives
Types of data: Device ID, IP address, operating system and browser type, length of visits to certain pages, and page interaction information such as scrolling, finger gestures, clicks, and mouse-overs, geographic location, time and date.
Purpose of processing: We use a limited set of usage data (which does not include personal health data) to track your page interaction and analyze the data to optimize our marketing initiatives.
Use justification: Consent (Article 6 (1) (a) GDPR). You can customize your tracking settings at any time in the privacy settings in the App, or by writing us here. 
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected, or you revoke your consent. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2. The data we process for the purpose of tracking is removed latest within 45 days. 
3.15 Performance reports
Types of data: Error, crash reports including device, app and incident specific information (e.g. App Version), IP address, URL, geographic location, time and date.
Purpose of processing: We use the above data (which does not include personal health data) both to ensure the functionality of our Services (our Services cannot function properly without this processing) and to prevent any decompiling or otherwise reverse engineering. We only use pseudonymized usage data that we may collect via service of our processor Functional Software Inc., 132 Hawthorne Street, San Francisco, California 94107 USA (“Sentry”). This data may be transmitted to and stored on Sentry’s servers. For more information, please see Sentry’s privacy policy here. We may also send the above personal data to our processor Sumo Logic, a corporation headquartered at 305 Main Street, Redwood City, CA 94063, US. The data collected in the context is not used to link any usage profile with your personal data. Your personal data may be transmitted and stored into the servers of Sumo Logic. Further information can be found in Sumo Logic’s Privacy Statement here.
We also transfer the personal data to our processor Hound Technology, Inc., 548 Market Street, 25362 San Francisco, CA 94104-5401 (“Honeycomb”). The data processed in this context is pseudonymized and cannot be linked to you by Honeycomb. Intelligent Symptomate does not link any usage profile with your personal data. Further information can be found in Honeycomb’s Privacy Policy here.
We have agreed on Standard Contractual Clauses and additional contractual obligations with each of these service providers. In addition, we will assess, on a case-by-case basis, the risks for your rights and privacy, together with and the necessity to keep them to provide you with our Services. Should you have any question about the additional measures we put in place please feel free to contact us via email to dpo@Intelligent Symptomate.com.
Use justification: Legitimate interest (Article 6 (1) (f) GDPR). Our legitimate interest is based on the aforementioned use of that data purposes. Under no circumstances will we use the collected data to determine your identity.
Storage duration: Your data is removed after 60 days, unless a security-relevant event occurs (for example, a Distributed Denial of Service attack). If a security-relevant event occurs, log files of the servers are stored until the security-relevant event has been completely eliminated and clarified.
3.16 Feedbacks / Surveys
Types of data:  feedback that may contain some personal data, email address (optional), data provided in the case (only if you provide us with your email address and have created an account with us, which allows us to identify you, only for the purposes listed below).
Purpose of processing: We use the feedback you may provide us (optional) to analyze whether you are satisfied or dissatisfied with our products and Services, and to assess your general experience with it. This is a fundamental resource for us to improve your user experience and adjust our actions to your needs. We may also use the feedback you may provide us (optional) to guarantee high quality and safety standards of our Medical Device, as described in section 3.5 above.
Use justification: Legitimate interest (Article 6(1)(f) GDPR): to improve your user experience and adjust our actions to your needs. Under no circumstances will we use the collected data to determine your identity.
Storage duration: Your data will be stored until it is no longer required for the purpose for which it was collected. The storage duration of your data for this purpose corresponds to the period of processing in accordance with Section 3.2.
3.17 Web-based Registration and Results Tool
Types of data: Account ID, name, address, date of birth, sex at birth, e-mail address, test results 
Purpose of processing: We provide you with the web-based registration and results tool (“Registration and Results Tool”) in cooperation with Labor Berlin – Charité Vivantes GmbH. We process your data to submit your registration to Labor Berlin and communicate the test results to you. In addition, we use the above data to provide you with a user account. Labor Berlin is the sole controller for the processing related to the carrying out of the test. We are the controller for the processing related to your use of the Registration and Results Tool. 
Purpose of processing: Contract performance (Article 6(1)(b) GDPR / Consent (Article 9(2)(a) GDPR for your health data). You may revoke/withdraw your consent at any time; however, it is not possible to provide you with our Registration and Results Tool without such consent.
Storage duration: We process your data for the purposes specified above until you request deletion of your account or when you delete your account. If your account is inactive for more than 24 months, we will contact you to check whether you wish to continue using our Registration and Results Tool. If you then leave your user account unused for another 3 months, we will delete your account. In either case, we will delete your account within 1 month and delete or irreversibly anonymize your data (such that it cannot be associated with a specific natural person). We will further retain your data (see section 7 for more details), e.g. for the purposes of establishing, exercising or defending against legal claims but we will not process the data for any other purposes.
3.18 Job application
Types of data: first name, last name, email address, phone number, geographic location (city), resume, LinkedIn profile (optional), time and date of the application.
Purpose of processing: If you are an applicant on our Website, we may process the above data in order to check your suitability for the position (or any other vacancies within our company) and to conduct the application process.
Use justification: To take steps at your request prior to entering into a contract (Article 6(1)(b) GDPR).
Storage duration: In the event of a rejection, candidate data will be deleted after 6 months. If you have agreed to further storage of your personal data, we will add your data to our applicant pool. The data will be deleted after two years from that moment. If you are offered a job in the context of the application process, the data from the data system will be transferred to our Human Resources information system.
4. Cookies and tracking on our Website
Our Website uses so-called “cookies”. Cookies are text files that are stored in the Internet browser or by the Internet browser on your device (computer, tablet, or phone). We use the term “cookies” to refer to all tools that collect data on our Website (e.g. IP addresses, place and time of the visit). Your data collected in this way is pseudonymized, and is not stored together with your other personal data. This processing is carried out on a legal basis and, where required by law, based on your consent.

For detailed information on the cookies we use, the purposes for which we use them and to manage your Cookie preferences, see our Cookie Policy.

5. Where do we store your personal data
The personal data that we collect from you is stored in the European Union on Cloud Servers of Amazon Web Services EMEA S.A.R.L. (“AWS”) with a business seat in Luxembourg and on the Cloud Servers of Google Commerce Limited ("GCL"), a company incorporated under the laws of Ireland, with its offices at Gordon House, Barrow Street, Dublin 4, Ireland. This data may, however, be processed by sub- processors operating outside of the European Economic Area (“EEA”) based on a data processing agreement, as long as the additional requirements of Article 44 et seq. GDPR for the processing of personal data in third countries are met (e.g. if the sub-processor can provide appropriate safeguards under Article 46 GDPR , such as but not limited to standard data protection clauses, binding corporate rules, approved code of conduct or exceptional circumstances under Article 49 GDPR) and any necessary additional measures based on case-by-case assessments.

Sensitive information between your browser and our Website is transferred in encrypted form using Transport Layer Security (“TLS”). When transmitting sensitive information, you should always make sure that your browser can validate our certificate.

Please contact us if you would like further details on the specific safeguards applied to the export of your personal data outside the EEA.

6. Disclosure of your personal data
6.1 We use technical service providers to operate and maintain our Services, who act as our processors based on a data processing agreement. A full list of our third-party processors processing your personal data on our behalf and strictly according to section 3 above can be found here. Service providers who process personal data on our behalf outside the EEA (or “third countries”) will only be used if the recipient has received a European Commission decision on appropriateness or suitable or appropriate guarantees for this third country. In addition, we do not transfer your personal data to third parties - with the exception, when applicable, of the purposes listed below.

Use justification: The legal basis for the transfer and processing of your personal data by the processor corresponds to the legal basis on which we, as data controller, rely (always in compliance with section 3 above).
6.2 If we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer of such business or assets.

Use justification: Legitimate interest (Article 6(1)(f) GDPR): to sell our business or assets / where required by applicable law: consent (Article 9(2)(a) GDPR): for the processing of special categories of data, i.e. your personal health data.
6.3 If we or, substantially, all of our assets are acquired by a third party, personal data about our users will be one of the transferred assets.

Use justification: Legitimate interest (Article 6(1)(f) GDPR): to sell our company or assets / where required by applicable law: consent (Article 9(2)(a) GDPR): for the processing of special categories of data, i.e. your personal health data.
6.4 If we are required on the basis of EU law or the law of a Member State to disclose or share your personal data.

Use justification: Legal obligation (Article 6(1)(c) GDPR).
6.5 We may disclose certain data to organizations involved in clinical trials and other types of research where you have explicitly authorized us to do so.

Use justification: Consent (Article 9(2)(a) GDPR).
7. How long do we retain your personal data
We will hold your personal data for as long as it is necessary or required by law or by any relevant regulatory body, and always in compliance with the data minimization principle. Specific storage periods for the respective processing activities are detailed in section 3 above.

If your personal data is used for more than one purpose, we will retain it until the purpose with the longest period expires, but we will stop using it for the purpose with the shorter period as soon as the shorter period expires (to comply with the purpose limitation principle). We restrict access to your personal data to the persons who need to use it for the relevant purpose(s), always in compliance with the integrity and confidentiality principle. 

After the processing of your data is no longer necessary for the purposes outlined in section 3 or your account is deleted (see section 3.2) we will securely and separately store some of your data in accordance with statutory retention obligations applicable to us and reasonable business needs. 

We will retain accounting data in accordance with the commercial and tax law storage obligations of six or ten years (§ 147 German Tax Code, § 257 German Commercial Code).

We will retain Post-Market-Surveillance data (incl. health data) in accordance with our storage obligations according to the medical device law.

We will retain data (incl. health data) in relation to your use of our Services for three or ten years in accordance with our business needs for the purposes of establishing, exercising or defending against legal claims. 

If you were a user of the UK Doctor Chat services (which is no longer available since 23 March 2018), your consultation details may be retained by us for a period up to 10 years according to the UK Records Management Code of Practice Retention Schedule, or if otherwise required by Care Quality Commission (“CQC”).

If the processing of your personal data is no longer necessary for any purpose it is either irreversibly anonymized (and the anonymized data may be retained), or securely erased.

8. Your data subject’s rights
Under GDPR you have various rights in relation to your personal data (as listed below). All of these rights can be exercised by contacting us via our contact form, by selecting “Exercising My Data & Privacy Rights”.

Verification: in order to verify your request, we will take reasonable steps such as asking you to send us a confirmation from the email address associated with your account, so that we can verify that you are the owner of this email account. If there is no email address associated with your account, we may ask you for proof of ID.

Right to withdraw consent: Where the processing of your data relies on your prior consent, you have the right to withdraw such a consent at any time by notifying us here. By withdrawing your consent, the lawfulness of the processing based on consent up until the point of withdrawal will not be affected. 
Right to object: You have a right to object under the conditions of Article 21 GDPR. Below you will find more detailed information:
— Right to object where the processing is based on legitimate interests: As a data subject, you have the right to object on grounds relating to your particular situation, at any time, to the processing of your personal data which is based on Article 6(1)(e) or (f) GDPR, including profiling based on those provisions. In the event of an objection relating to your particular situation, we will no longer process your personal data, unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or for the establishment, exercise or defense of legal claims. 
— Right to object where we process your personal data for statistical purposes: If we process your personal data for statistical purposes pursuant to Article 9(2)(j) GDPR / section 27(1) BDSG, you have the right to object to such processing for reasons arising from your particular situation. In the event of such an objection, we will no longer process the personal data concerned for this purpose, unless the processing is necessary to fulfil a task in the public interest, or if the discontinuation of such a processing is likely to make it impossible or seriously impair the realization of statistical purposes and the continuation of processing is necessary for the fulfilment of statistical purposes.
— Right to object where we process your personal data for public health purposes: If we process your personal data for public health purposes pursuant to Article 9(2)(i) GDPR, / section 22 (1)(1)(c) BDSG, you have the right to object to such processing for reasons arising from your particular situation. In the event of such an objection, we will no longer process the personal data concerned for this purpose, unless the processing is necessary to fulfil a task in the public interest, or if the discontinuation of such a processing is likely to make it impossible or seriously impair the realization of public health purposes and the continuation of processing is necessary for the fulfilment of public health purposes.
— Right to object to direct marketing: Where your personal data are processed for direct marketing purposes, you have the right to object at any time to processing of your personal data for such marketing, which includes profiling to the extent that it is related to such direct marketing. If you object to processing for direct marketing purposes, we no longer process your personal data for these purposes. To exercise your rights of objection, you may reply by email to the direct marketing email you receive from us, or contact us at any time here. 
Right to be informed: As a data subject, you have a right to obtain access and information under the conditions provided in Article 15 GDPR. This means in particular that you have the right to obtain confirmation from us as to whether we are processing your personal data or not. If so, you also have the right to obtain access to the personal data and the information listed in Article 15(1) GDPR. This includes information regarding the purposes of the processing, the categories of personal data that are being processed, and the recipients or categories of recipients to whom the personal data have been or will be disclosed.
Right to erasure / ‘Right to be forgotten’: As a data subject, you have a right to erasure (“right to be forgotten”) under the conditions provided in Article 17 GDPR. This means that you generally have the right to obtain from us the erasure of your personal data and we are obliged to erase your personal data without undue delay when one of the reasons listed in Article 17(1) GDPR applies. You can do this by deleting your account, in the App, at any time. If we have made the personal data public and are obliged to erase it, we are also obliged, taking account of available technology and the cost of implementation, to take reasonable steps, including technical measures, to inform controllers which are processing the personal data that you have requested the erasure by such controllers of any links to, or copy or replication of those personal data (Article 17(2) of the GDPR. The right to erasure (“right to be forgotten”) does not by exception apply if the processing is necessary for one of the reasons listed in Article 17(3) GDPR. This can be the case, for example, if the processing is necessary for compliance with a legal obligation or for the establishment, exercise or defense of legal claims (Article 17(3)(b) and (e) GDPR).
Right to restriction of processing: As a data subject, you have a right to restriction of processing under the conditions provided in Article 18 GDPR. This means that you have the right to obtain from us the restriction of processing if one of the conditions provided in Article 18(1) GDPR applies. This can be the case, for example, if you contest the accuracy of the personal data. In such a case, the restriction of processing lasts for a period that enables us to verify the accuracy of the personal data (Article 18(1)(a) GDPR). Restriction means that stored personal data are marked with the goal of restricting their future processing (Article 4(3) GDPR).
Right to data portability: As a data subject, you have a right to data portability under the conditions provided in Article 20 GDPR. This means that you generally have the right to receive your personal data with which you have provided us in a structured, commonly used and machine-reIntelligent Symptomateble format, and to transmit those data to another controller without hindrance from us where the processing is based on consent (pursuant to Article 6(1)(a) or Article 9(2)(a) GDPR or on a contract (pursuant to Article 6(1)(b) GDPR), and where the processing is carried out by automated means (Article 20(1) GDPR). In exercising your right to data portability, you also generally have the right to have your personal data transmitted directly from us to another controller where technically feasible (Article 20(2) GDPR). 
Right to Rectification: As a data subject, you have the right to rectification under the conditions provided in Article 16 GDPR. This means in particular that you have the right to receive from us, without undue delay, the rectification of inaccuracies in your personal data and completion of incomplete personal data.
Right to complain: As a data subject, you have a right to lodge a complaint with a supervisory authority under the conditions provided in Article 77 GDPR. The supervisory authority responsible for us is the Berlin Data Protection Authority in Germany (Berliner Beauftragte für Datenschutz und Informationsfreiheit, Address: Friedrichstr. 219, 10969 Berlin; Telephone: 030 13889-0; E-Mail: mailbox@datenschutz-berlin.de).
Asking us to stop processing your personal data or deleting your personal data will likely mean that you are no longer able to use our Services, or at least those aspects of the Services which require the processing of the types of personal data you have asked us to delete, which may result in you no longer being able to use the Services.

9. Privacy information for California residents
If you are a California resident (as defined in the section 17014 of Title 18 of the California Code of Regulations), California law requires us to provide you with some additional information regarding your rights with respect to your “personal information” (as defined in the California Consumer Privacy Act (hereinafter the “CCPA”) that came into force on January 1st, 2020).

We did not during the preceding 12 months, do not currently, and will not in the future sell or transfer your personal data to third parties (and will never do it without providing a right to opt out).

We may transfer your personal data to third party processors in order to achieve the purposes of the processing listed in Section 3 above, but only with the third-party processors with whom we have a data protection agreement in place. A full list of our third-party processors can be found here.

CCPA provides Californian consumers the following rights (which does not interfere with GDPR):

Right to request disclosure of any personal information we collected (Article (1798.100) (a) CCPA). This means in particular that you have the right to request disclosure of the categories of personal information we collected from you, together with the categories of sources from which it was collected, the purpose of the collection, the categories of third parties with whom we shared your personal information, and the specific pieces of personal information that have been collected (Article 1798.110 (a) CCPA).
Right to request deletion of any personal information that we collected from you (Article (1798.105) CCPA). This means that after we have verified your request to delete your personal information, we shall delete it from our records and direct any service providers to delete your personal information from their records, except when Article 1798.105 (d) CCPA is applicable (e.g. in case the personal information is necessary to provide the Services, to detect security incidents, to identify and repair errors that impair existing intended functionality of the Services, to engage statistical research in the public interest, or to comply with a legal obligation).
In addition to the possibility to contact us through our contact form by selecting “Exercising My Data & Privacy Rights”, you can exercise any rights under CCPA or request further information regarding your rights by calling us through our hotline.

10. Privacy Information for Brazilian residents
If you are a Brazilian resident, Brazilian law requires us to provide you with some additional information regarding your rights with respect to your “personal information” (as defined in the “Lei Geral de Proteção de Dados” (hereinafter the “LGPD”) that came into force on September 18th, 2020).

To find out what categories of your personal information are processed and what are the purposes of, you can read the section 3 titled “Which personal data we may collect and process, why and for how long” within this document.

We can process your personal information solely if we have a legal basis for such processing. Legal bases are as follows:

your consent to the relevant processing activities;
protection or physical safety of yourself or a third party;
compliance with a legal or regulatory obligation that lies with us;
the carrying out of public policies provided in laws or regulations or based on contracts, agreements and similar legal instruments;
studies conducted by research entities, preferably carried out on anonymized personal information;
the carrying out of a contract and its preliminary procedures, in cases where you are a party to said contract;
the exercising of our rights in judicial, administrative or arbitration procedures;
the protection of health – in procedures carried out by health entities or professionals;
our legitimate interests, provided that your fundamental rights and liberties do not prevail over such interests; 
10.1 Your Brazilian privacy rights
You have the right to:

obtain confirmation of the existence of processing activities on your personal information;
access to your personal information;
have incomplete, inaccurate or outdated personal information rectified;
obtain the anonymization, blocking or elimination of your unnecessary or excessive personal information, or of information that is not being processed in compliance with the LGPD;
obtain information on the possibility to provide or deny your consent and the consequences thereof;
obtain information about the third parties with whom we share your personal information;
obtain, upon your express request, the portability of your personal information (except for anonymized information) to another service or product provider, provided that our commercial and industrial secrets are safeguarded;
obtain the deletion of your personal information being processed if the processing was based upon your consent, unless one or more exceptions provided for in art. 16 of the LGPD apply;
revoke your consent at any time;
lodge a complaint related to your personal information with the ANPD (the National Data Protection Authority) or with consumer protection bodies;
oppose a processing activity in cases where the processing is not carried out in compliance with the provisions of the law;
request clear and adequate information regarding the criteria and procedures used for an automated decision; and
request the review of decisions made solely on the basis of the automated processing of your personal information, which affect your interests. These include decisions to define your personal, professional, consumer and credit profile, or aspects of your personality.
You will never be discriminated against, or otherwise suffer any sort of detriment, if you exercise your rights.

10.2 How to file your request
You can file your express request to exercise your rights free from any charge, at any time, by using the contact details provided in this document (e.g. an email at dpo@Intelligent Symptomate.com), or via your legal representative.

10.3 How and when we will respond to your request
We will strive to promptly respond to your requests.

In any case, should it be impossible for us to do so, we’ll make sure to communicate to you the factual or legal reasons that prevent us from immediately, or otherwise ever, complying with your requests. In cases where we are not processing your personal information, we will indicate to you the physical or legal person to whom you should address your requests, if we are in the position to do so.

In the event that you file an access or personal information processing confirmation request, please make sure that you specify whether you’d like your personal information to be delivered in electronic or printed form.

You will also need to let us know whether you want us to answer your request immediately, in which case we will answer in a simplified fashion, or if you need a complete disclosure instead.

In the latter case, we’ll respond within 15 days from the time of your request, providing you with all the information on the origin of your personal information, confirmation on whether or not records exist, any criteria used for the processing and the purposes of the processing, while safeguarding our commercial and industrial secrets.

In the event that you file a rectification, deletion, anonymization or personal information blocking request, we will make sure to immediately communicate your request to other parties with whom we have shared your personal information in order to enable such third parties to also comply with your request – except in cases where such communication is proven impossible or involves disproportionate effort on our side.

10.4 Transfer of personal information outside of Brazil permitted by the law
As Intelligent Symptomate is based in Germany we only transfer your data including health related data to Germany to provide our services. In addition to that Intelligent Symptomate uses third party services outlined in section 3 to transfer data to third countries.

We are allowed to transfer your personal information outside of the Brazilian territory in the following cases:

when the transfer is necessary for international legal cooperation between public intelligence, investigation and prosecution bodies, according to the legal means provided by the international law;
when the transfer is necessary to protect your life or physical security or those of a third party;
when the transfer is authorized by the ANPD;
when the transfer results from a commitment undertaken in an international cooperation agreement;
when the transfer is necessary for the execution of a public policy or legal attribution of public service;
when the transfer is necessary for compliance with a legal or regulatory obligation, the carrying out of a contract or preliminary procedures related to a contract, or the regular exercise of rights in judicial, administrative or arbitration procedures.
11. Changes to this policy
Any changes we make to our Privacy Policy in the future will be posted on this page, and where appropriate, notified to you by email, notifications via the App, or by any other available means. We therefore encourage you to review it from time to time to stay informed about the way we are processing your data.</p>
        
          </div>
        </div>
      </div>
    </MobileView>
  </div>
  </div>

  );
}
