// const Terms = () => {
//     return (
//       <div>Terms Page</div>
      
//     );
//   }
  
//   export default Terms;

import React from "react";
import { useEffect } from 'react';
import styles from"./Terms.module.css"; // Optional: External CSS for styling
import ScrollButton from '../../components/scroll/ScrollButton';

const Terms = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  return (
    <>
      <div className={styles.container}>
      <h1>Terms and Conditions</h1>
      <p className={styles.updated_date}>Date Updated: 14 December, 2024</p>

      <h2>Introduction</h2>
      <p>
        Welcome to TEDxIITGuwahati (we, us, or our). By registering as a member
        of the TEDxIITGuwahati community, registering for and paying for
        attendance at TEDxIITGuwahati events (Event(s)), attending an Event,
        and/or using and/or accessing our services, website, resources, and/or
        platforms (our Services), you confirm you accept these terms of use
        (Terms) and agree to be bound by them.
      </p>
      <p>
        Our Services are provided as a public service to promote the spread of
        good ideas throughout the world. We independently organize and provide
        them under a license from TED, and we welcome anyone willing to join us
        in this pursuit.
      </p>
      <p>
        We reserve the right to change these Terms at any time. If any such
        changes constitute a material change, we will notify you. What constitutes
        a “material change” will be determined at our sole discretion, in good
        faith and using common sense and reasonable judgment. Your continued use
        of any of our Services (including attending an Event) will constitute
        acceptance of such changes.
      </p>

      <h2>Services</h2>
      <p>Our Services allow you to:</p>
      <ul>
        <li>Register for and pay for attendance at Events;</li>
        <li>
          Access:
          <ul>
            <li>Inspiring, innovative, and educational talks</li>
            <li>
              An online collection of resources including talks, performances,
              news, ideas, and other information
            </li>
          </ul>
        </li>
      </ul>
      <p>
        You must use and access the Services for lawful purposes and in a way
        that does not infringe the rights of anyone or restrict or inhibit
        anyone’s use of them.
      </p>
      <p>
        We do not represent or warrant that the operation of the Services will
        be secure, confidential, uninterrupted, error-free, accurate, complete,
        or current.
      </p>

      <h2>Content</h2>
      <p>
        You are responsible for any content that you submit, post, and/or use
        in the Services, including data, text, files, information, usernames,
        photos, profiles, audio and video clips, works of authorship,
        applications, links, and other materials (User Content).
      </p>
      <p>You must not submit, post, or display any User Content that:</p>
      <ul>
        <li>
          Constitutes (as determined by us in our sole discretion) a personal
          attack, a coordinated group attack, name-calling, trolling, or abuse
        </li>
        <li>You do not have permission, right, or license to use</li>
        <li>
          Is objectionable, indecent, profane, offensive, discriminatory,
          unlawful, deceptive, or harmful
        </li>
        <li>Is personal, private, or confidential information belonging to others</li>
        <li>Impersonates or misrepresents your affiliation with another person or entity</li>
        <li>Is intentionally false or misleading</li>
        <li>Transmits spam, worms, viruses, malware, or any code of a destructive nature</li>
        <li>Is defamatory, threatening, illegal, fraudulent, or manipulative</li>
      </ul>
      <p>
        You must respect that other people in the TEDxIITGuwahati community have
        had different life experiences and may have a different perspective to
        yours. We welcome different viewpoints.
      </p>

      <h2>Acceptable Use</h2>
      <p>You must not:</p>
      <ul>
        <li>
          Copy, modify, or create derivative works based on the content available
          through the Services and/or based on the Services generally
        </li>
        <li>Infringe the intellectual property rights, privacy, or confidentiality of any third party</li>
        <li>
          Engage in any activity that is illegal or that may result in injury,
          death, property damage, or liability of any kind
        </li>
        <li>
          Post or transmit any unauthorized material, including material that is
          offensive, inflammatory, defamatory, racist, obscene, threatening, or
          pornographic
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        We post talks and content from around the world. While we strive to ensure
        all ideas posted are credible, based on facts and do not infringe on other
        people’s intellectual property rights, there may be an occasion when content
        is provided by other parties, and/or may include material that infringes
        on the copyright of another third party.
      </p>
      <p>If you believe in good faith that content on our site infringes your copyright, you may send us a notice detailing the alleged infringement and requiring it to be removed.</p>
      <p>We own, or are the licensee of, the intellectual property rights in the content available via the Services, including text, graphics, photographs, logos, icons, sound recordings, and software.</p>
      <p>These Terms do not transfer any intellectual property rights from us to you or any third parties.</p>
      <p>You must not (without our consent):</p>
      <ul>
        <li>adapt, reproduce, store, distribute, print, display, perform, publish, or create derivative works from any part of the content or material downloaded from the site.</li>
        <li>use our name, logo and other trademarks, service marks, graphics, and logos or any third-party trademarks appearing on the site.</li>
        <li>create links to the Services.</li>
      </ul>
      <p>The parties agree we will own any intellectual property rights arising from any suggestions or feedback you provide to us.</p>

      <h2>Linked Websites</h2>
      <p>The Services may contain links to third-party websites, products, and services.</p>
      <p>Nothing available through the Services amounts to an offer by us or any third-party provider to:</p>
      <ul>
        <li>Provide any goods or services to you; or</li>
        <li>Enter into any contract with you.</li>
      </ul>
      <p>
        We display certain Services via the YouTube embedded player on our website.
        Any content that is provided by YouTube is subject to their terms of use and
        license requirements. Please review their terms of use that apply for license
        and usage terms.
      </p>
      <p>We do not make any representations or warranties in relation to, and we exclude all liability from, third-party websites, products, and services.</p>

      <h2>Privacy and Security</h2>
      <p>
        Our collection, use, and disclosure of any personal information provided by you or accessible by us when you use the Services will be subject to our privacy policy.
      </p>
      <p>
        You acknowledge and agree that the TEDxSydney community is a public place. Don’t post personal information that you would not be comfortable sharing with a stranger. We don’t recommend you post any information that may identify you, such as your address, email address, or phone number.
      </p>
      <p>
        While we take reasonable steps to protect your information, we do not warrant and cannot ensure the security of any information that you transmit to us.
      </p>
      <p>
        We are not responsible for any of the privacy or security practices of any of the users of the Services or any linked websites.
      </p>
      <p>
        Any information that you transmit to us or to any other user of the Services is transmitted at your own risk. We are not responsible or liable with respect to any communications or transactions between you and any third party that you contact as a result of accessing or using the Services.
      </p>


      <h2>Event Attendance</h2>
      <p>From time to time we may host physical or digital TEDxIITGuwahati events (Event).</p>
      <p>To attend a:</p>
      <ul>
        <li>
          <strong>Physical and/or Digital Event:</strong>
          <ul>
            <li>You must register via tedxsydney.com/community/ to become a member of the TEDxSydney community;</li>
            <li>You must have registered successfully and paid for your attendance in full;</li>
            <li>You must agree to abide by our attendee code of conduct (to the extent applicable to the physical or digital Event) set out at clause 10;</li>
            <li>You must provide photo identification if required;</li>
            <li>You must consent to us (or someone on our behalf) or our partners taking screenshots or recording audio or video of your attendance and participation at the Event;</li>
          </ul>
        </li>
        <li><strong>Digital Event:</strong> You must be 12 years of age or older;</li>
        <li>
          <strong>Physical Event:</strong>
          <ul>
            <li>You must be 18 years of age or older, or if under 18 years of age, you must be accompanied by an adult over 18 years old who has also registered to attend the Event;</li>
            <li>You must consent to us (or someone on our behalf) or our partners taking and sharing photographs, and audio and video recordings of you at the Event (Recordings).</li>
          </ul>
        </li>
      </ul>
      <p>
        We own all rights (including copyright and other intellectual property rights) to the Recordings, are under no obligation to use, or pay you for, our use of the Recordings, and you have no right of approval, claim for compensation, or claim, arising out of, directly or indirectly, from the use and publication of the Recordings.
      </p>

      <h2>Transfer or Cancellation of Event Registration</h2>
      <p>
        If you have paid registration fees for an Event and are unable to attend, you may transfer your registration without cost, provided:
      </p>
      <ul>
        <li>
          The transferee meets the requirements in clause 2, including registering via Register to become a member of the TEDxIITGuwahati community;
        </li>
        <li>
          You submit your transfer request by emailing us at <strong>iitg.tedx@gmail.com</strong> at least 2 full days before the Event.
        </li>
      </ul>
      <p>
        As we are a non-profit organisation, our registration fees represent an integral part of our funding, and we do not provide refunds for cancellations or non-attendance by you, unless required by any applicable Australian law. We apologise for the inconvenience, but we hope you understand. We do allow you to transfer your registration to another member, free of charge, in accordance with clause 1.
      </p>
      <p>
        We reserve the right to cancel, reschedule, or reframe the delivery of an Event in our sole discretion. If that happens, then the following terms apply:
      </p>
      <ul>
        <li>We will notify you of any changes to an Event as soon as is reasonably practicable.</li>
        <li>
          Where we reschedule or reframe the delivery of an Event, we will automatically transfer your registration to the rescheduled/reframed Event. Clause 1 will continue to apply, and you may transfer your registration pursuant to it.
        </li>
        <li>
          If we cancel, reschedule, or reframe the delivery of an Event due to government restrictions or mandates arising as a result of COVID-19 (and/or any other cause independent of human control), we will outline the options that we are able to offer in respect of your registration at that time.
        </li>
        <li>For the reasons explained in clause 2, save for where we are required to provide a refund, our tickets are generally non-refundable.</li>
        <li>You can contact us at <strong>iitg.tedx@gmail.com</strong> for further assistance in relation to your registration.</li>
      </ul>

      <h2>Attendee Code of Conduct</h2>
      <p>
        TEDxIITGuwahati is built around a spirit of curiosity, open-mindedness, respect, and tolerance, and we do not tolerate harassment in any form.
      </p>
      <p>
        As a member of the TEDxIITGuwahati community and Event attendee, you’re expected to practice tolerance and respect for everyone, including other attendees, staff, volunteers, and vendors, regardless of their background, class, political views, or status.
      </p>
      <p>At an Event, you agree to:</p>
      <ul>
        <li>Respect people’s space and everyone’s ability to participate in the event;</li>
        <li>Respect confidentiality requests by speakers and other attendees;</li>
        <li>Look out for your fellow attendees.</li>
      </ul>
      <p>The following behaviors don’t belong and will not be accepted at our Events:</p>
      <ul>
        <li>Sexual harassment of any kind, including unwelcome sexual attention and inappropriate physical contact.</li>
        <li>Being disruptive, drinking excessively, bullying, stalking, following, or threatening anyone.</li>
        <li>Homophobia, racism, or behavior that unlawfully discriminates against a group or class of people.</li>
        <li>Invasion of privacy, including taking photos that are unwanted or intrusive.</li>
      </ul>
      <p>We reserve the right to:</p>
      <ul>
        <li>Bar from our Events in their entirety or in part;</li>
        <li>Cancel the Event or TEDxIITGuwahati registration of; and/or</li>
        <li>Remove from an Event,</li>
      </ul>
      <p>
        any person who violates this attendee code of conduct, without refund (to the extent permitted by law).
      </p>
      <p>
        If, while at an Event, you have been involved in or have witnessed an incident that violates this attendee code of conduct, please report it as soon as possible to a TEDxIITGuwahati team member. Team members are onsite at our customer service and registration desks. Share as much information as you can to help us with any investigation of the incident.
      </p>
      <p>
        All reports will be treated in the strictest of confidence to the extent possible, taking account of TEDxIITGuwahati’s obligations to properly investigate complaints in appropriate circumstances.
      </p>
      <p>
        If you wish, our team can also help you contact venue security or the local police or provide you with an escort to assist you in feeling safe for the duration of the event.
      </p>

      <h2>Reliance</h2>
      <p>To the extent permitted by law, we make no representations, and provide no warranties of any kind, including:</p>
      <ul>
        <li>
          That your use of the Services will be uninterrupted or error-free, free from loss, corruption, attack, viruses, interference, hacking, or other security intrusion; or
        </li>
        <li>
          That any information or other content posted or otherwise made available to you (including at an Event) by us or by third parties is complete, accurate, verified, audited, adequate, reliable, up-to-date, or suitable for any particular purpose, or that reasonable care has been taken in compiling, preparing and posting such information and third-party content.
        </li>
      </ul>

      <h2>Liability</h2>
      <p>Your use of the Services and attendance at an Event is entirely at your own risk. Notwithstanding anything else in this agreement, we accept no liability for any decisions made by you, as a result of your use of the Services or attendance at an Event.</p>
      <p>To the extent permitted by law:</p>
      <ul>
        <li>
          The Services and all third-party content available to you through the Services are (except as expressly stated by us) provided “as is” and “as available” for your use without warranties of any kind, either express or implied, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement;
        </li>
        <li>
          We are not liable for any direct, indirect loss or Consequential Loss resulting from:
          <ul>
            <li>Any action taken, or reliance made by you on any information or other third-party content available to you through the Services;</li>
            <li>Any unauthorized access of or breach of security to the Services for whatever reason;</li>
            <li>Any error, faults, omissions, inaccuracies, or misrepresentation in relation to the Services and their content;</li>
            <li>The transmission of any virus; and/or</li>
            <li>Your use of the Services or attendance at an Event.</li>
          </ul>
        </li>
      </ul>
      <p>Nothing contained in these Terms restricts or modifies any guarantee.</p>
      <p>TEDxIITGuwahati’s liability for its failure to comply with a guarantee is limited to:</p>
      <ul>
        <li>
          In the case of goods, to one or more of the following:
          <ul>
            <li>The replacement of the goods or the supply of equivalent goods;</li>
            <li>The repair of the goods;</li>
            <li>The payment of the cost of replacing the goods or acquiring equivalent goods;</li>
            <li>The payment of the cost of having the goods repaired;</li>
          </ul>
        </li>
        <li>
          In the case of services, any cost of the following as determined by us:
          <ul>
            <li>The supplying of the services again; or</li>
            <li>The payment of the cost of having the services supplied again.</li>
          </ul>
        </li>
      </ul>
      <p><strong>Consequential Loss</strong> includes losses which do not arise naturally from a breach of contract in the usual course, loss of profits, loss of revenue, loss of data, lost production, loss of business, loss of the benefit of any contract or other agreement or arrangement, death or personal injury, damage to health, damage to reputation, and legal costs.</p>

      <h2>Maintenance</h2>
      <p>
        We may at any time and without notice, modify, suspend or terminate the operation of, or access to the Services, or any part of, for any reason, to interrupt the operation of the Services, or any part of, as necessary to perform maintenance, error correction or other changes.
      </p>

      <h2>General Terms</h2>
      <p>
        Notices required to be given under these Terms may be sent by email to{" "}
        <a href="mailto:iitg.tedx@gmail.com">iitg.tedx@gmail.com</a>.
      </p>
      <p>
        If any term or provision of these Terms is held by a court to be illegal, invalid, or unenforceable under the applicable law, that term or provision will be severed from these Terms, and the remaining terms and conditions will be unaffected.
      </p>
      <p>A failure to enforce any right or provisions in these Terms will not constitute a waiver of such or any other provision.</p>
      <p>We will not be responsible for failures to fulfill any obligations due to causes beyond our control.</p>
      <p>These Terms will not be interpreted or construed to confer any rights or remedies on any third parties.</p>
      <p>
        These Terms constitute the entire agreement between the parties, with all other agreements or understandings previously existing between you and us hereby replaced.
      </p>
      <p>
        The Services or content made available on or through the Services are not intended for distribution to, or use by, any person or entity, in any jurisdiction or country, where such distribution or use would be contrary to law or regulation. We may limit the availability of the Services or content, or any part of, to any person, geographic area, or jurisdiction at any time.
      </p>
      <p>
        Nothing in these Terms should be read to override or circumvent any laws of a foreign jurisdiction. All Services or content made available through the Services are void where prohibited.
      </p>

      <p style={{ fontStyle: "italic", fontSize: "0.9em", fontFamily: "'Arial', sans-serif" }}>
        These terms were updated on 14 December 2024.
      </p>

      {/* <div
        className="footer"
        style={{
          backgroundColor: "#2F283C",
          color: "white",
          textAlign: "center",
          padding: "20px 0",
          fontFamily: "'Arial', sans-serif",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0 }}>© 2024 TEDxIITGuwahati. All rights reserved.</p>
      </div> */}
    </div>
    <ScrollButton/>
    </>
  );
};

export default Terms;
