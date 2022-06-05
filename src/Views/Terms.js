import '../CSS/Terms.css';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';



function Terms() {
    const arrUsedata = [
        "We use data from Flytant app and other Flytant Company Products, as well as from third-party partners, to show you ads, offers, and other sponsored content that we believe will be meaningful to you. And we try to make that content as relevant as possible to you.",
        "Research and innovation – We use the information we have to study our Service and collaborate with others on research to make our Service better and contribute to the well-being of our community.",
        "Ensuring a stable global infrastructure for our Service – To provide our global Service, we must store and transfer data across our systems around the world, including outside of your country of residence. Try your luck with This infrastructure may or may not be owned or operated by Flytant Developers Pvt. Ltd. or their affiliates.",
        "Developing and using technologies that help us consistently serve our growing community. Organizing and analyzing information for our growing community is central to our Service. A big part of our Service is creating and using cutting-edge technologies that help us personalize, protect, and improve our Service on an incredibly large scale for a broad global community. Technologies like artificial intelligence and machine learning give us the power to apply complex processes across our Service. Automated technologies also help us ensure the functionality and integrity of our Service. ",
        "Offering personalized opportunities to create, connect, communicate, discover, and share. We want to strengthen your relationships through shared experiences you actually care about. So we build systems that try to understand who and what you and others care about, and use that information to help you create, find, join, and share in experiences that matter to you. Part of that is highlighting content, features, offers, and accounts you might be interested in, and offering ways for you to experience Flytant, based on things you and others do on and off Flytant.",
        "Your commitments – We require you to make the below commitments to us, in return for our commitment to provide the service. Who Can Use You must be at least 13 years old or the minimum legal age in your country to use Flytant. You must not be prohibited from receiving any aspect of our service under applicable laws or engaging in payments related services if you are on an applicable denied party listing. We must not have previously disabled your account for violation of law or any of our policies. You must not be a convicted sex offender.",
        "You can’t impersonate others or provide inaccurate information. You don’t have to disclose your identity on Flytant, but you must provide us with accurate and up to date information (including registration information). Also, you may not impersonate someone you aren’t, and you can’t create an account for someone else unless you have their express permission.",
        "We also use various social media platform’s API’s. Hence you must follow their Terms of Service too. Link to Youtube Terms of Service – https://www.youtube.com/t/terms .You can’t do anything to interfere with or impair the intended operation of the Service.",
        "You can’t attempt to create accounts or access or collect information in unauthorized ways. This includes creating accounts or collecting information in an automated way without our express permission.",
        "You can’t attempt to buy, sell, or transfer any aspect of your account (including your username) or solicit, collect, or use login credentials or badges of other users.",
        "You can’t post private or confidential information or do anything that violates someone else’s rights, including intellectual property.",
        "You can’t use a domain name or URL in your username without our prior written consent.",
        "We do not claim ownership of your content, but you grant us a license to use it. Nothing is changing about your rights in your content. We do not claim ownership of your content that you post on or through the Service. Instead, when you share, post, or upload content that is covered by intellectual property rights (like photos or videos) on or in connection with our Service, you hereby grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your content (consistent with your privacy and application settings). You can end this license anytime by deleting your content or account. However, content will continue to appear if you shared it with others and they have not deleted it.",
        "Permission to use your username, profile picture, and information about your relationships and actions with accounts, ads, and sponsored content. You give us permission to show your username, profile picture, and information about your actions (such as likes) or relationships (such as follows) next to or in connection with accounts, ads, offers, and other sponsored content that you follow or engage with that are displayed on Flytant Products, without any compensation to you. For example, we may show that you liked a sponsored post created by a brand that has paid us to display its ads on Flytant. As with actions on other content and followers of other accounts, actions on sponsored content and followers of sponsored accounts can be seen only by people who have permission to see that content or follow.",
        "You agree that we can download and install updates to the Service on your device.",
        "If you use content covered by intellectual property rights that we have and make available in our Service (for example, images, designs, videos, or sounds we provide that you add to content you create or share), we retain all rights to our content (but not yours).",
        "You can only use our intellectual property and trademarks or similar marks only with our prior written permission.",
        "You must obtain written permission from us or under an open source license to modify, create derivative works of, decompile, or otherwise attempt to extract source code from us.",
        "We can remove any content or information you share on the Service if we believe that it violates these Terms of Use or we are permitted or required to do so by law. We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your account) immediately to protect our community or services, or if you create risk or legal exposure for us, if you repeatedly infringe other people’s intellectual property rights, or where we are permitted or required to do so by law. If we take action to disable or terminate your account, we will notify you where appropriate. If you believe your account has been terminated in error, or you want to disable or permanently delete your account, then you can contact us.",
        "Content you delete may persist for a limited period of time in backup copies and will still be visible where others have shared it. This paragraph, and the section below called “Our Agreement and What Happens if We Disagree,” will still apply even after your account is terminated or deleted.",
        "Your use of content on the Service is also subject to our guidelines, and your use of our API is subject to our Platform Policy. If you use certain other features or related services, additional terms will be made available and will also become a part of our agreement. If any aspect of this agreement is unenforceable, the rest will remain in effect.",
        "Any amendment or waiver to our agreement must be in writing and signed by us. If we fail to enforce any aspect of this agreement, it will not be a waiver. And we reserve all rights not expressly granted to you.",
        "This agreement does not give rights to any third parties. You cannot transfer your rights or obligations under this agreement without our consent. Our rights and obligations can be assigned to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law.",
        "We always appreciate feedback or other suggestions, but may use them without any restrictions or obligation to compensate you for them, and are under no obligation to keep them confidential. ",
        "Our Service is provided “as is,” and we can’t guarantee it will be safe and secure or will work perfectly all the time. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
        "We also don’t control what people and others do or say, and we aren’t responsible for their (or your) actions or conduct (whether online or offline) or content (including unlawful or objectionable content). We also aren’t responsible for services and features offered by other people or companies, even if you access them through our Service.",
        "Our responsibility for anything that happens on the Service (also called “liability”) is limited as much as the law will allow. If there is an issue with our Service, we can’t know what all the possible impacts might be. You agree that we won’t be responsible (“liable”) for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms, even if we know they are possible. This includes when we delete your content, information, or account.",
        "If you are a consumer, the laws of the country in which you reside will apply to any claim, cause of action, or dispute you have against us that arises out of or relates to these Terms (“claim”), and you may resolve your claim in any competent court in that country that has jurisdiction over the claim. In all other cases, you agree that the claim must be resolved exclusively in the Indian district Court for the New Delhi, that you submit to the personal jurisdiction of either of these courts for the purpose of litigating any such claim, and that the laws of theIndia will govern these Terms and any claim, without regard to conflict of law provisions.",
        "We may change our Terms of Use, Service and policies, and we may need to make changes to these. And if you continue to use the Service, you will be bound by the updated Terms.",
    ]
   

    return <>
    <Header/>
    <div className='privacy'>Terms Of Use </div>
     <div className='These'>These Terms of Use govern your use of Flytant and provide information about the Flytant Service, outlined below. When you create a Flytant account or use Flytant, you agree to these terms of use.  </div>
    





     <div className='Use'>
               {
                    arrUsedata.map(data => 
                         <div className='dataprivacy'>{data}</div>
                    )
               }

               {/* <div className='dataprivacy'>one</div>
               <div className='dataprivacy'>one</div> */}
          </div>


          <div className='blankbox'></div>
    <Footer/>
   </>
}
export default Terms;