import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/contact-us");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="detailcard-container" style={{ maxWidth: "1400px" }}>
        <button className="rater-button self" onClick={() => navigate("/")}>
          Back to Home &#8592;
        </button>

        <div className="apply-form-container">
          <h2 className="heading-secondary marginbottom">Terms of Service</h2>
          <p className="paragraph-primary">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="paragraph-primary">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="career-requirements lower">1. Acceptance of Terms</h3>
          <ul>
            <li className="icon-paragraph">
              By accessing, browsing, or using Unisire ("Platform", "Service",
              "we", "us", or "our"), you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service
              ("Terms") and our Privacy Policy.
            </li>
            <li className="icon-paragraph">
              If you do not agree with any part of these Terms, you must
              immediately discontinue your use of the Platform and any
              associated services.
            </li>
            <li className="icon-paragraph">
              We reserve the right to modify, update, or replace these Terms at
              any time without prior notice. Your continued use of the Platform
              following the posting of any changes constitutes your acceptance
              of those changes.
            </li>
            <li className="icon-paragraph">
              These Terms constitute a legally binding agreement between you and
              Unisire governing your access to and use of our curated
              educational platform.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            2. Platform Service Model & Description
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Curated Educational Platform:</strong> Unisire operates as
              a curation and aggregation platform that meticulously filters,
              organizes, and presents high-quality educational resources
              available across the internet. We do not create original course
              content but employ expert-driven selection processes to identify
              the most effective learning materials.
            </li>
            <li className="icon-paragraph">
              <strong>Expertly Curated Roadmaps:</strong> Our platform currently
              provides 5+ carefully structured learning roadmaps designed by
              analyzing successful career trajectories and evaluating thousands
              of online resources. Each roadmap is rated 4.8/5 stars based on
              comprehensive user feedback, completion analytics, and success
              metrics from our growing community of 10,000+ active learners.
            </li>
            <li className="icon-paragraph">
              <strong>Proven Resume References:</strong> We showcase 10+
              authentic, anonymized resumes from students and professionals who
              have successfully secured positions at leading companies including
              Paytm, Microsoft, Google, and other top-tier organizations. These
              serve as educational reference templates demonstrating effective
              resume structuring and content presentation.
            </li>
            <li className="icon-paragraph">
              <strong>AI Tools Directory & Recommendations:</strong> Unisire
              provides carefully vetted references to external AI tools that can
              enhance learning efficiency and project development. These are
              third-party tools we recommend based on community feedback, expert
              analysis, and practical utility; we do not develop, host, or
              maintain these tools ourselves.
            </li>
            <li className="icon-paragraph">
              <strong>Quality-First Curation Approach:</strong> Unlike platforms
              that overwhelm users with countless options, Unisire employs a
              quality-over-quantity methodology, delivering limited,
              high-impact, proven resources that have demonstrated measurable
              results for students and professionals across various domains.
            </li>
            <li className="icon-paragraph">
              <strong>Upcoming Features:</strong> Our development roadmap
              includes interview preparation modules, resume building tools,
              job/internship integration systems, and enhanced progress tracking
              features scheduled for release in upcoming platform versions.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            3. Eligibility & Account Registration
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Age Requirements:</strong> You must be at least 13 years
              old to use our Platform. Users between 13 and 18 years of age must
              obtain explicit parental or guardian consent before registering or
              using our services.
            </li>
            <li className="icon-paragraph">
              <strong>Account Accuracy:</strong> You agree to provide accurate,
              current, and complete information during the registration process
              and to update such information to maintain its accuracy throughout
              your use of the Platform.
            </li>
            <li className="icon-paragraph">
              <strong>Geographic Availability:</strong> Unisire is currently
              available to users worldwide, though certain resume examples,
              career paths, and resource recommendations may be optimized for
              specific geographic regions based on placement data and market
              analysis.
            </li>
            <li className="icon-paragraph">
              <strong>Single Account Policy:</strong> Each user may maintain
              only one active account. Creating multiple accounts may result in
              termination of all associated accounts without notice.
            </li>
            <li className="icon-paragraph">
              <strong>Account Security:</strong> You are solely responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. You must
              immediately notify us of any unauthorized use of your account or
              any other security breaches.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            4. User Responsibilities & Acceptable Use
          </h3>

          <h4 className="career-requirements lower">Permitted Activities</h4>
          <ul>
            <li className="icon-paragraph">
              Access and use the Platform for personal, non-commercial
              educational purposes
            </li>
            <li className="icon-paragraph">
              Reference curated resources for skill development and career
              advancement
            </li>
            <li className="icon-paragraph">
              Share feedback and ratings to help improve our curation quality
            </li>
            <li className="icon-paragraph">
              Use resume examples as templates for creating your own
              professional documents
            </li>
          </ul>

          <h4 className="career-requirements lower">Prohibited Activities</h4>
          <ul>
            <li className="icon-paragraph">
              Provide false, misleading, or inaccurate information during
              registration or platform use
            </li>
            <li className="icon-paragraph">
              Attempt to impersonate other users, especially the professionals
              whose resumes we feature
            </li>
            <li className="icon-paragraph">
              Distribute, modify, republish, or commercially exploit any curated
              content without explicit written permission from Unisire and/or
              the original content owners
            </li>
            <li className="icon-paragraph">
              Use automated systems, bots, scrapers, or any unauthorized
              automated means to access, extract, or monitor Platform content
            </li>
            <li className="icon-paragraph">
              Engage in any conduct that disrupts, damages, or impairs Platform
              functionality or user experience
            </li>
            <li className="icon-paragraph">
              Misrepresent your association with Unisire or claim endorsement,
              affiliation, or sponsorship where none exists
            </li>
            <li className="icon-paragraph">
              Use the Platform for any illegal, fraudulent, or unauthorized
              purpose
            </li>
            <li className="icon-paragraph">
              Attempt to gain unauthorized access to any portion of the
              Platform, other accounts, or computer systems/networks connected
              to the Platform
            </li>
          </ul>

          <h3 className="career-requirements lower">
            5. Intellectual Property Rights
          </h3>

          <h4 className="career-requirements lower">
            Platform Intellectual Property
          </h4>
          <ul>
            <li className="icon-paragraph">
              <strong>Curation Methodology:</strong> While the educational
              resources we curate are owned by their respective creators, our
              proprietary selection methodology, roadmap structures, resource
              organization systems, content presentation formats, and user
              experience designs are the intellectual property of Unisire and
              are protected by copyright, trademark, and other intellectual
              property laws.
            </li>
            <li className="icon-paragraph">
              <strong>Limited License:</strong> Subject to your compliance with
              these Terms, we grant you a limited, non-exclusive,
              non-transferable, non-sublicensable, revocable license to access
              and use the Platform and curated content for personal,
              non-commercial educational purposes only.
            </li>
            <li className="icon-paragraph">
              <strong>Brand Protection:</strong> The Unisire name, logo,
              platform design, user interface, and all related graphics are
              trademarks and trade dress of Unisire. You may not use these
              without our prior written permission.
            </li>
          </ul>

          <h4 className="career-requirements lower">
            Third-Party Content & External Resources
          </h4>
          <ul>
            <li className="icon-paragraph">
              <strong>External Resource Ownership:</strong> All external
              educational resources, AI tools, websites, platforms, and learning
              materials referenced on Unisire are owned by their respective
              third-party providers. Unisire only curates, references, and
              organizes these resources for educational purposes.
            </li>
            <li className="icon-paragraph">
              <strong>Third-Party Terms:</strong> When you access external
              resources through our Platform, you are subject to the terms,
              conditions, and privacy policies of those third-party platforms.
              We encourage you to review their policies before using their
              services.
            </li>
            <li className="icon-paragraph">
              <strong>Copyright Concerns & Removal Requests:</strong> If you are
              the owner of any external content referenced on our Platform and
              have concerns about its inclusion, please contact us immediately
              at (By visiting Contact Us page) with the following information:
              <ul>
                <li>Proof of ownership or authorized representation</li>
                <li>Specific identification of the content in question</li>
                <li>Exact URLs where the content appears on our Platform</li>
                <li>Reason for the removal request</li>
                <li>Contact information for follow-up communication</li>
              </ul>
              We will promptly review and address valid copyright or removal
              requests, typically within 5-7 business days.
            </li>
            <li className="icon-paragraph">
              <strong>Resource Removal:</strong> We respect intellectual
              property rights and will remove references to external resources
              upon legitimate request from verified content owners or authorized
              representatives.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            6. Service Limitations & Disclaimers
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>"As-Is" Basis:</strong> The Platform and all curated
              materials are offered on an "as-is" and "as-available" basis
              without warranties of any kind, either express or implied,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </li>
            <li className="icon-paragraph">
              <strong>No Placement or Outcome Guarantees:</strong> While we
              showcase successful resumes, career paths, and learning
              strategies, we do not guarantee any specific outcomes, including
              job placements, career advancement, salary increases, or skill
              mastery. Individual results depend on numerous factors beyond our
              control including personal effort, market conditions, and
              individual capabilities.
            </li>
            <li className="icon-paragraph">
              <strong>Resource Availability & Quality:</strong> We curate
              external resources but cannot guarantee their permanent
              availability, consistent quality, accessibility, free access
              status, or educational effectiveness as these are controlled by
              third parties and subject to change without notice.
            </li>
            <li className="icon-paragraph">
              <strong>Analytics & Ratings Disclaimer:</strong> Our platform
              ratings (typically 4.8/5 stars), success metrics, and user
              statistics are derived from aggregated user feedback, completion
              analytics, and self-reported success data. These are provided for
              informational purposes only and should not be considered as
              guarantees of individual success.
            </li>
            <li className="icon-paragraph">
              <strong>Third-Party Content Accuracy:</strong> We strive to
              maintain accurate and up-to-date information but make no
              representations or warranties regarding the accuracy, reliability,
              completeness, or timeliness of any third-party content referenced
              on our Platform.
            </li>
            <li className="icon-paragraph">
              <strong>Service Interruptions:</strong> We do not guarantee
              uninterrupted, secure, or error-free operation of the Platform. We
              may temporarily suspend access for maintenance, updates, or
              technical improvements without prior notice.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            7. Limitation of Liability
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Indirect Damages:</strong> To the fullest extent permitted
              by applicable law, in no event shall Unisire, its directors,
              employees, partners, agents, suppliers, or affiliates be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Platform.
            </li>
            <li className="icon-paragraph">
              <strong>Third-Party Liability:</strong> Unisire shall not be
              liable for any issues, disputes, damages, or losses arising from
              your use of external educational resources, AI tools, platforms,
              or services we reference. Any concerns regarding third-party
              content, services, or platforms should be directed to the
              respective content owners or service providers.
            </li>
            <li className="icon-paragraph">
              <strong>Educational Outcomes:</strong> We are not liable for any
              educational outcomes, career results, or personal development
              achievements (or lack thereof) resulting from your use of curated
              resources or Platform features.
            </li>
            <li className="icon-paragraph">
              <strong>Aggregate Liability:</strong> To the maximum extent
              permitted by law, our total cumulative liability to you for all
              claims arising from or related to these Terms or your use of the
              Platform shall not exceed the greater of (a) the amount you have
              paid to Unisire for access to the Platform in the twelve (12)
              months preceding the event giving rise to the claim, or (b) one
              hundred U.S. dollars (USD $100).
            </li>
            <li className="icon-paragraph">
              <strong>Essential Purpose:</strong> The limitations in this
              section apply regardless of the legal theory or basis of claim,
              whether in contract, tort (including negligence), strict
              liability, or any other theory, and will survive termination or
              expiration of these Terms.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            8. Platform Evolution & Future Development
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Continuous Improvement:</strong> Unisire is committed to
              continuous evolution and improvement. Our curation algorithms,
              resource selection criteria, and platform features evolve based on
              user success data, emerging educational trends, technological
              advancements, and comprehensive effectiveness metrics.
            </li>
            <li className="icon-paragraph">
              <strong>Service Expansion:</strong> We plan to expand our curated
              roadmaps from 5+ to 10+ specialized learning paths based on user
              demand, industry requirements, and emerging skill domains.
              Expansion timelines are estimates and subject to change based on
              development priorities and resource availability.
            </li>
            <li className="icon-paragraph">
              <strong>Feature Development:</strong> Upcoming platform versions
              will include enhanced features such as personalized learning
              recommendations, advanced progress analytics, interview
              preparation modules, resume building tools, and job/internship
              integration systems.
            </li>
            <li className="icon-paragraph">
              <strong>User-Driven Roadmap:</strong> Our platform development
              roadmap is heavily influenced by user analytics, success stories,
              feature requests, and community feedback to ensure we deliver
              maximum educational value and user satisfaction.
            </li>
            <li className="icon-paragraph">
              <strong>Beta Features:</strong> Some new features may be released
              as beta versions for limited user testing. User feedback during
              these beta phases directly shapes feature refinement and final
              implementation decisions.
            </li>
          </ul>

          <h3 className="career-requirements lower">9. Indemnification</h3>
          <ul>
            <li className="icon-paragraph">
              You agree to indemnify, defend, and hold harmless Unisire, its
              affiliates, officers, directors, employees, agents, and
              representatives from and against any and all claims, damages,
              obligations, losses, liabilities, costs, debt, and expenses
              (including but not limited to attorney's fees) arising from:
            </li>
            <li className="icon-paragraph">
              Your use of and access to the Platform, including any data or
              content transmitted or received by you
            </li>
            <li className="icon-paragraph">
              Your violation of any provision of these Terms, including any
              representations and warranties made herein
            </li>
            <li className="icon-paragraph">
              Your violation of any third-party right, including without
              limitation any copyright, property, or privacy right
            </li>
            <li className="icon-paragraph">
              Your use of external resources, tools, or platforms referenced on
              our Service
            </li>
            <li className="icon-paragraph">
              Any claims that your use of the Platform caused damage to a third
              party
            </li>
            <li className="icon-paragraph">
              Your violation of any applicable law, rule, or regulation
            </li>
            <li className="icon-paragraph">
              Any other party's access and use of the Platform with your unique
              username, password, or other appropriate security code
            </li>
          </ul>

          <h3 className="career-requirements lower">
            10. Account Suspension & Termination
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Termination by You:</strong> You may terminate your
              account at any time by contacting us (By visiting Contact Us page)
              or through account settings (where available). Termination will
              result in the deactivation or deletion of your account and access
              to it.
            </li>
            <li className="icon-paragraph">
              <strong>Termination by Us:</strong> We may suspend or terminate
              your account immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach
              these Terms. Upon termination, your right to use the Platform will
              cease immediately.
            </li>
            <li className="icon-paragraph">
              <strong>Inactive Accounts:</strong> Accounts that remain inactive
              for a period of 24 consecutive months may be deactivated or
              deleted to optimize platform performance and resource allocation.
              We will attempt to provide notice before such action when
              feasible.
            </li>
            <li className="icon-paragraph">
              <strong>Effect of Termination:</strong> Upon termination, all
              rights granted to you under these Terms will immediately cease.
              Provisions of these Terms that by their nature should survive
              termination shall survive termination, including without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </li>
            <li className="icon-paragraph">
              <strong>Data Retention:</strong> After termination, we may retain
              your information for legitimate business purposes, legal
              compliance, dispute resolution, enforcement of our agreements, and
              as described in our Privacy Policy.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            11. Modifications to Service & Terms
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Service Modifications:</strong> We reserve the right to
              modify, suspend, or discontinue, temporarily or permanently, the
              Platform or any service to which it connects, with or without
              notice and without liability to you.
            </li>
            <li className="icon-paragraph">
              <strong>Terms Updates:</strong> We may revise these Terms from
              time to time. The most current version will always be posted on
              our Platform. If revisions are material, we will attempt to
              provide at least 30 days' notice prior to any new terms taking
              effect.
            </li>
            <li className="icon-paragraph">
              <strong>Continued Use:</strong> By continuing to access or use our
              Platform after any revisions become effective, you agree to be
              bound by the revised terms. If you do not agree to the new terms,
              you are no longer authorized to use the Platform.
            </li>
            <li className="icon-paragraph">
              <strong>Notification Methods:</strong> We may provide
              notifications regarding changes to these Terms or the Platform via
              email, platform notifications, or by posting a notice on our
              website. It is your responsibility to regularly review these Terms
              for any changes.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            12. Governing Law & Dispute Resolution
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Governing Law:</strong> These Terms shall be governed by
              and construed in accordance with the laws of India, without regard
              to its conflict of law provisions.
            </li>
            <li className="icon-paragraph">
              <strong>Jurisdiction:</strong> Any legal action or proceeding
              arising under these Terms will be brought exclusively in the
              courts located in New Delhi, India, and you hereby irrevocably
              consent to the personal jurisdiction and venue of such courts.
            </li>
            <li className="icon-paragraph">
              <strong>Informal Resolution:</strong> Before filing any claim
              against Unisire, you agree to attempt to resolve the dispute
              informally (By visiting Contact Us page) . We will attempt to
              resolve the dispute informally within 60 days of your notice.
            </li>
            <li className="icon-paragraph">
              <strong>Class Action Waiver:</strong> You agree to resolve
              disputes with Unisire on an individual basis and waive any right
              to participate in a class action lawsuit or class-wide
              arbitration.
            </li>
            <li className="icon-paragraph">
              <strong>Time Limitation:</strong> Any cause of action or claim you
              may have arising out of or relating to these Terms or the Platform
              must be commenced within one (1) year after the cause of action
              accrues, otherwise, such cause of action or claim is permanently
              barred.
            </li>
          </ul>

          <h3 className="career-requirements lower">13. General Provisions</h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Entire Agreement:</strong> These Terms, together with our
              Privacy Policy and any other legal notices published by us on the
              Platform, constitute the entire agreement between you and Unisire
              concerning the Platform and supersede all prior agreements and
              understandings, whether written or oral.
            </li>
            <li className="icon-paragraph">
              <strong>Severability:</strong> If any provision of these Terms is
              held to be invalid, illegal, or unenforceable by a court of
              competent jurisdiction, the remaining provisions will remain in
              full force and effect, and the affected provision will be deemed
              modified to the minimum extent necessary to make it valid, legal,
              and enforceable.
            </li>
            <li className="icon-paragraph">
              <strong>Waiver:</strong> No waiver of any term of these Terms
              shall be deemed a further or continuing waiver of such term or any
              other term, and Unisire's failure to assert any right or provision
              under these Terms shall not constitute a waiver of such right or
              provision.
            </li>
            <li className="icon-paragraph">
              <strong>Assignment:</strong> You may not assign or transfer these
              Terms, by operation of law or otherwise, without our prior written
              consent. Any attempt by you to assign or transfer these Terms
              without such consent will be null and void. We may freely assign
              or transfer these Terms without restriction.
            </li>
            <li className="icon-paragraph">
              <strong>Independence:</strong> Unisire operates independently and
              is not affiliated with, endorsed by, or sponsored by the
              educational platforms, AI tool providers, companies, or
              institutions mentioned in our resume examples or resource
              recommendations unless explicitly stated.
            </li>
            <li className="icon-paragraph">
              <strong>Force Majeure:</strong> We shall not be liable for any
              failure to perform our obligations hereunder where such failure
              results from any cause beyond our reasonable control, including
              without limitation, mechanical, electronic, or communications
              failure or degradation, governmental actions, pandemics,
              earthquakes, fires, floods, or other acts of God.
            </li>
          </ul>

          <h3 className="career-requirements lower">14. Contact Information</h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Platform:</strong> Unisire Educational Platform
            </li>
            <li className="icon-paragraph">
              <strong>General Inquiries:</strong> (By visiting Contact Us page)
            </li>
            <li className="icon-paragraph">
              <strong>Copyright & Removal Requests:</strong> (By visiting
              Contact Us page)
            </li>
            <li className="icon-paragraph">
              <strong>Legal Matters:</strong> Contact us (By visiting Contact Us
              page)
            </li>
            <li className="icon-paragraph">
              For any questions, concerns, or notices regarding these Terms of
              Service, please visit our{" "}
              <Link
                to="/contact-us"
                className="text-link"
                onClick={handleContactClick}
              >
                Contact Us
              </Link>{" "}
              page or email us at the addresses provided above.
            </li>
            <li className="icon-paragraph">
              <strong>Platform Mission:</strong> Unisire is committed to
              reducing information overload for students and professionals
              worldwide by providing expertly curated, quality-filtered
              educational resources that have demonstrated real-world success
              and measurable learning outcomes.
            </li>
          </ul>

          <p
            className="paragraph-primary"
            style={{ marginTop: "2rem", fontStyle: "italic" }}
          >
            By using Unisire, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Service and our Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
