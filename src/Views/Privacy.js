import '../CSS/Privacy.css';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import woman3 from '../Assets/Images/woman3.png';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import instapick from '../Assets/Images/instapick.png';
import youtube from '../Assets/Images/youtube.png';
import twitter from '../Assets/Images/twitter.png';
import mail from '../Assets/Images/mail.png';
import faceb from '../Assets/Images/faceb.png';

import link from '../Assets/Images/link.png';






function Privacy() {
     const arrDataPolicy = [
          "We collect the content, communications and other information you provide when you use our products, including when you sign up for an account, create or share content, and message or communicate with others.",
          "This can include information in or about the content you provide (like metadata), such as the location of a photo or the date a file was created. It can also include what you see through features we provide, such as our camera, so we can do things like suggest masks and filters that you might like, or give you tips on using camera formats. Our systems automatically process content and communications you and others provide to analyze context and what's in them for the purpose of great user experience.",
          "We also receive and analyze content, communications and information that other people provide when they use our products. Enjoy with. This can include information about you, such as when others share or comment on a photo of you, send a message to you, or upload, sync or import your contact information.",
          "We collect information about how you use our Products, such as the types of content you view or engage with; the features you use; the actions you take; the people or accounts you interact with; and the time, frequency and duration of your activities. For example, we log when you're using and have last used our Products, and what posts and other content you view on our platforms. We also collect information about how you use features like our camera.",
          "All these details are stored in our database and are used for improving user experience such as when the user is making any transaction again then we suggest to use the same debit or credit card to ensure hassle free experience for the user.",
          "We collect information about the people, pages, accounts, hashtags and groups you are connected to and how you interact with them across our platforms, such as people you communicate with the most or groups you are part of. We also collect contact information if you choose to upload, sync or import it from a device (such as an address book or call log or SMS log history), which we use for things like helping you and others find people you may know.",
          "We collect information from and about the devices you use that are integrated with our platform, and we combine this information across different devices you use. For example, we use information collected about your use of our platform on your phone to better personalize the content (including ads) or features you see when you use our platform on another device, such as your laptop or tablet, or to measure whether you took an action in response to an ad we showed you on your phone on a different device.",
          "We collect device attributes such as information about the operating system, hardware and software versions, battery level, signal strength, available storage space, browser type, app and file names and types, and plugins that are integrated on the device.",
          "We collect information about operations and behaviors performed on the device, such as whether a window is in foreground or background, or mouse movements (which can help distinguish humans from bots).",
          "We use unique identifiers, device IDs, and other identifiers, such as apps or accounts that you use.",
          "We use device signals such as bluetooth signals, and information about nearby Wi-Fi access points, beacons, and cell towers.",
          "We use data from device settings such as information you allow us to receive through device settings you turn on, such as access to your GPS location, camera or photos.",
          "We use network and connection information such as the name of your mobile operator or ISP, language, time zone, mobile phone number, IP address, connection speed.",
          "Advertisers, content creators and publishers can send information to us including our social plug-ins (such as the Like button). These partners provide information about your activities on the platform such as about your device, websites you visit, purchases you make, the ads you see, and how you use their services. We also receive information about your online and offline actions and purchases from third-party data providers who have the rights to provide us with your information.",
          "Partners receive your data when you visit or use their services or through third parties they work with. We require each of these partners to have lawful rights to collect, use and share your data before providing any data to us.",
          "We use the information we have to provide personalized features and content (including your Feed, Explore, Shops, Stories and ads) and make suggestions for you (such as groups or events you may be interested in or topics you may want to follow) on and off our platform. To create personalized platform that are unique and relevant to you, we use your connections, preferences, interests and activities based on the data we collect and learn from you and others (including any data with special protections you choose to provide); how you use and interact with our platform; and the people, places, or things you're connected to and interested in on and off our platform.",
          "We use Location-related information such as your current location, where you live, the places you like to go, and the businesses and people you're near-to provide, personalize and improve our platform, including ads, for you and others. Location-related information can be based on things like precise device location (if you've allowed us to collect it), IP addresses, and information such as check-ins or events you attend.",
          "We use the information we have about you-including information about your interests, actions and connections-to select and personalize ads, offers and other sponsored content that we show you and how we use your choices over the data we use to select ads.",
          "We use the information we have (including your activity off our platform, such as the websites you visit and ads you see) to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps, and services.",
          "We use the information we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off our platform. For example, we use data we have to investigate suspicious activity or violations of our terms or policies, or to detect when someone needs help.",
          "We use the information we have to send you marketing communications, communicate with you about our Products, and let you know about our policies and terms. We also use your information to respond to you when you contact us.",
         




     ]
     const arrPlatformPolicy = [
          "By using this platform, you agree that Flytant can use a set of APIs, SDKs, plugins, code, specifications, documentation, technology, and services (such as content) that enables others, including application developers and website operators, to retrieve data from Flytant or provide data to us. We reserve the right to change this policy at any time without notice, so please check it regularly. Your continued use of the Flytant Platform constitutes acceptance of any changes. You also agree to and are responsible for ensuring that you comply with the Flytant Terms of Use and Flytant Community Guidelines. ",
          "We provide the Flytant Platform to support several types of apps and services. First, we provide them to help members of our community share their own content with apps or services. We also support apps and services that help brands and advertisers understand and manage their audience, develop their content strategy, and obtain digital rights. Finally, we provide the Flytant Platform to help broadcasters and publishers discover content, get digital rights to media, and share media using web embeds. The Flytant platform is not intended for other types of apps or services.",
          "By using this platform you also agree to the following terms of service – Don’t confuse, deceive, defraud, mislead, or harass anyone. Be transparent about your identity and your app’s identity. Don’t use the platform for any app that constitutes, promotes or is used in connection with spyware, adware, or any other malicious programs or code. Don’t store or cache Flytant login credentials.",
          "You ensure that the app is stable and easily navigable. For example, verify that you have integrated Login correctly. Your app shouldn’t crash or hang during the testing process.",
          "Provide meaningful customer support for your app, and make it easy for people to contact you.",
          "Comply with any requirements or restrictions imposed on usage of Flytant user photos and videos (“User Content”) by their respective owners. You are solely responsible for making use of user content in compliance with owners’ requirements or restrictions.",
          "Remove within 24 hours any user Content or other information that the owner asks you to remove.",
          "Obtain a person’s consent before including their user Content in any ad or any of your posts.",
          "Only store or cache User Content for the period necessary to provide your app’s service.",
          "If you store or cache User Content, keep it up to date.",
          "Don’t use the Flytant Platform to simply display User Content, import or backup content, or manage Flytant relationships, without our prior permission.",
          "Don’t participate in any “like”, “share”, “comment” or “follower” exchange programs.",
          "Don’t use follower information for anything other than analytics without our prior permission. For example, don’t display these relationships in your app.",
          "Only use the INSIGHTS DATA endpoint to inform the account holder of their own analytics information. Do not use it for any other service and do not share it with any third parties.",
          "Ensure your comments are uniquely tailored for each person. Don’t post unauthorized commercial communications or spam on Flytant Platform.",
          "Respect the limits we’ve placed on Flytant functionality and the way Flytant looks and functions. Don’t offer experiences that change it.",
          "Don’t attempt to build an ad network on Flytant.",
          "Don’t ask users to like, comment or share your post in return of money or any unauthorized manner.",
          "Protect the information you receive from us against unauthorized access, use, or disclosure. For example, don’t use data obtained from us to provide tools that are used for surveillance.",
          "Don’t transfer any data that you receive from us (including anonymous, aggregate, or derived data) to any ad network, data broker, or other advertising or monetization-related service.",
          "Only incentivize a person to log into your app or enter a promotion. Don’t incentivize other actions.",
          "If you want to facilitate or promote online gambling, online real money games of skill, or online lotteries, get our written permission before using any of our products.",
          "Don’t use an unreasonable amount of bandwidth, or adversely impact the stability of Flytant servers or the behavior of other apps using the Flytant Platform.",
          "Don’t reverse engineer the Flytant apps source code or APIs or any of Flytant’s apps.",
          "Don’t attempt to identify groups of individuals or create demographic clusters for the purpose of contacting or targeting Flytant members on or off Flytant.",
          "Don’t sell, lease, or sublicense the Flytant Platform or any data derived through the Platform.",
          "Comply with all applicable laws or regulations. Don’t provide or promote content that violates any rights of any person, including but not limited to intellectual property rights, rights of privacy, or rights of personality.",
          "Don’t post anyone’s copyrighted pictures, videos or other contents that you don’t have rights upon. In that case seek permission from that creator and only if he/she agrees then post their content on Flytant platform.",
          "Make sure that you comply with all terms and conditions of the Flytant platform else severe steps like legal action, account ban, may take place.",
          "All your posts must not include any logos, watermarks, calls-to-action, other promotional content.",
          "Additional policies for posts with Attribution: a. Post must not be generic (i.e., only enable people to share unique and personal content). b. If a person clicks on your post, ensure you direct them to an experience that enhances the post.",
          "Flytant may put a limit or block accounts that make a large number of posts that are not primarily in response to direct user actions.",
          "Apart from our policies you must follow these policies too – https://www.youtube.com/t/terms | https://policies.google.com/privacy | https://myaccount.google.com/permissions . Also our platform uses YouTube API Services. Hence you must abide by their Terms as well.",
          "Enforcement is both automated and manual, and can include disabling your account, restricting you and your app’s access to Flytant Platform, requiring that you delete data, terminating our agreements with you or any other action that we deem appropriate.",
          "Flytan may change, suspend, or discontinue the availability of any Flytant Platform at any time. In addition, Flytant may impose limits on certain features and services or restrict your access to parts or all of the Flytant APIs or the Flytant website without notice or liability.",
          "If Flytant elects to provide you with support or modifications for the Flytant Platform, this support may be terminated at any time without notice to you. • Flytant reserves the right to charge the prices it pays to users for their post and any changes can be made to it without any prior notice . • Flytant doesn’t guarantee that the Flytant Platform is free of inaccuracies, errors, bugs, or interruptions, or is reliable, accurate, complete, or otherwise valid. • You represent and warrant that you own or have secured all rights necessary to display, distribute and deliver all content in your app or website. To the extent your users are able to share content from your app or website on or through Flytant, you represent and warrant that you own or have secured all necessary rights for them to do so in accordance with Flytant’s available functionality.",
          "Flytant primarily communicates with creators through email. Please ensure that the email addresses associated with your Flytant account are current and correct and that you don’t filter out these messages.",
          "You represent and warrant that you satisfy all licensing, reporting, and payout obligations to third parties in connection with your app or website.",
          "You give us all rights necessary to enable your app to work with Flytant, including the right to incorporate information you provide to us into other parts of Flytant, and the right to attribute the source of information using your name and logos.",
          "You also give as all rights to use the content posted by you on Flytant and Flytant can use this wherever and whenever required.",
          "You are responsible for restricting access to your content in accordance with all applicable laws and regulations, including geo-filtering or age-gating access where required",
          "You grant us and our affiliates a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any data, content, and other information made available by you or on your behalf in connection with your use of our Platform. This license survives even if you stop using the platform feature. You are responsible for obtaining the necessary rights from all applicable rights holders to grant this license. Any content made available by you or on your behalf in connection with the platform features is deemed part of your app.",
          "Disclaimer of Any Warranty: Flytant Platform and all data derived through such Platform are provided “as is” with no warranty, express or implied, of any kind and Instagram expressly disclaims any and all warranties and conditions, including but not limited to, any implied warranty of merchantability, fitness for a particular purpose, availability, security, title and non-infringement. You are solely responsible for any damage that results from the use of any Flytant Platform and all any data derived through such Platform including, but not limited to, any damage to your computer system or loss of data.",
          "Limitation of Liability: Flytant shall not, under any circumstances, be liable to you for any indirect, incidental, consequential, special or exemplary damages arising out of or in connection with use of the Flytant Platform and any data derived through such Platform, whether based on breach of contract, breach of warranty, tort (including negligence, product liability or otherwise), or any other pecuniary loss, whether or not Flytant has been advised of the possibility of such damages. Under no circumstances shall Flytant be liable to you for any amount.",
          "Release and Waiver: To the maximum extent permitted by applicable law, you hereby release and waive all claims against Flytant, and its subsidiaries, affiliates, officers, agents, licensors, co-branders or other partners, and employees from any and all liability for claims, damages (actual and/or consequential), costs and expenses (including litigation costs and attorneys’ fees) of every kind and nature, arising from or in any way related to your use of the Flytant Platform and data derived through such Platform.",
          "Hold Harmless and Indemnify: To the maximum extent permitted by applicable law, you agree to hold harmless and indemnify Flytant and its subsidiaries, affiliates, officers, agents, licensors, co-branders or other partners, and employees from and against any third-party claim arising from or in any way related to your use of the Flytant Platform and any data derived through the Platform, including any liability or expense arising from all claims, losses, damages (actual and/or consequential), suits, judgments, litigation costs and attorneys’ fees, of every kind and nature. Flytant shall use good faith efforts to provide you with written notice of such claim, suit or action.",
          "Invalidity of Specific Terms: If any provision of the Flytant Platform Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision and that the other provisions remain in full force and effect.",
          "No Waiver of Rights by Flytant: Flytant’s failure to exercise or enforce any right or provision of the Flytant Platform Terms shall not constitute a waiver of such right or provision.",

     ]





     return <>
          <Header />
          <div className='privacy'> Privacy Policy</div>
          <div className='These'>These policies describes the information we use and process to support the Flytant app and ensure enriching experience for the users on our platform.s </div>

          <div className='dataName'>Data Policy
               {
                    arrDataPolicy.map(data => 
                         <div className='dataprivacy'>{data}</div>
                    )
               }

               {/* <div className='dataprivacy'>one</div>
               <div className='dataprivacy'>one</div> */}
          </div>
          <div className='dataName'>Platform policy
               {
                    arrPlatformPolicy.map(data => 
                         <div className='dataprivacy'>{data}</div>
                    )
               }

               {/* <div className='dataprivacy'>one</div>
               <div className='dataprivacy'>one</div> */}
          </div>



        

<div className='blankbox'></div>



          <div className='icon'>
               <div className='icontext'>Or connect with us on</div>
               <div className='mini'>
                    <div className='collam'>
                         <img className='collamimg' src={instapick} alt="instapick.png" />


                    </div>
                    <div className='collam'>
                         <img className='collamimg' src={youtube} alt="youtube.png" />


                    </div>
                    <div className='collam'>
                         <img className='collamimg' src={faceb} alt="faceb.png" />


                    </div>
                    <div className='collam'>
                         <img className='collamimg' src={link} alt="link.png" />


                    </div>
                    <div className='collam'>
                         <img className='collamimg' src={twitter} alt="twitter.png" />


                    </div>
                    <div className='collam'>
                         <img className='collamimg' src={mail} alt="mail.png" />


                    </div></div>

          </div>





          <Footer />
     </>
}
export default Privacy;