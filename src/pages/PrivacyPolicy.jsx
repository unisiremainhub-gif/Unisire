import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

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
          <h2 className="heading-secondary marginbottom">Privacy Policy</h2>
          <p className="paragraph-primary">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="paragraph-primary">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="career-requirements lower">
            1. Introduction & Platform Overview
          </h3>
          <ul>
            <li className="icon-paragraph">
              Unisire ("we," "our," "us," or "Platform") is committed to
              protecting your privacy while providing a curated educational
              platform that filters and presents the best learning resources
              available across the internet. We operate as a curation service,
              not a content creation platform.
            </li>
            <li className="icon-paragraph">
              Our platform currently offers 5+ expertly curated learning
              roadmaps, 10+ verified resume examples from successfully placed
              students, and a comprehensive directory of AI tools that enhance
              learning efficiency. We serve a growing community of 10,000+
              active learners with quality-filtered educational resources.
            </li>
            <li className="icon-paragraph">
              This comprehensive Privacy Policy explains in detail how we
              collect, use, store, process, share, and protect your personal
              information in compliance with the Indian Information Technology
              Act, 2000, the Digital Personal Data Protection Act, 2023, and
              other applicable global data protection regulations.
            </li>
            <li className="icon-paragraph">
              By accessing, registering for, or using Unisire's services,
              platforms, websites, applications, or any associated features
              (collectively, the "Services"), you explicitly consent to the data
              practices, collection methods, and processing activities described
              in this extensive Privacy Policy. If you do not agree with any
              aspect of this policy, you must immediately discontinue using our
              Services.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            2. Comprehensive Information Collection
          </h3>

          <h4 className="career-requirements lower">
            2.1 Personal Information We Collect
          </h4>
          <ul>
            <li className="icon-paragraph">
              <strong>Registration & Account Information:</strong> When you
              create an account with Unisire, we collect your full name, email
              address, password (encrypted and hashed), phone number, country of
              residence, and timezone to create and manage your personalized
              learning experience.
            </li>
            <li className="icon-paragraph">
              <strong>Educational & Professional Profile:</strong> To provide
              tailored recommendations, we collect detailed information about
              your educational background (current institution, degree program,
              graduation year, academic performance), professional experience
              (internships, jobs, projects), technical skills, career interests,
              learning objectives, and professional aspirations.
            </li>
            <li className="icon-paragraph">
              <strong>Learning Progress & Engagement Data:</strong> We
              meticulously track your learning journey including roadmap
              progress, completed resources, time spent on each learning
              material, quiz scores, project submissions, achievement badges
              earned, skill proficiency levels, and learning patterns.
            </li>
            <li className="icon-paragraph">
              <strong>User-Generated Content:</strong> When you actively
              participate in our platform, we collect content you create
              including forum posts, comments, resource ratings (typically 4.8/5
              stars average), reviews, project submissions, portfolio items,
              learning notes, and any files you choose to upload.
            </li>
            <li className="icon-paragraph">
              <strong>Communication Records:</strong> We maintain records of all
              communications between you and Unisire, including support tickets,
              feedback submissions, survey responses, and any correspondence
              through our official channels.
            </li>
          </ul>

          <h4 className="career-requirements lower">
            2.2 Automated Technical Information Collection
          </h4>
          <ul>
            <li className="icon-paragraph">
              <strong>Device & Browser Information:</strong> We automatically
              collect technical data including your IP address, browser type and
              version, operating system, device type, mobile network
              information, unique device identifiers, and system configuration
              settings to optimize platform performance.
            </li>
            <li className="icon-paragraph">
              <strong>Usage Analytics & Behavioral Data:</strong> Using advanced
              analytics tools, we collect detailed information about your
              interaction with our platform including pages visited, time spent
              on each page, clickstream patterns, features used, search queries,
              resource download history, and navigation paths through our
              curated roadmaps.
            </li>
            <li className="icon-paragraph">
              <strong>Cookies & Tracking Technologies:</strong> We employ
              cookies, web beacons, pixel tags, localStorage, and similar
              tracking technologies to enhance user experience, remember your
              preferences, maintain session continuity, analyze platform usage
              patterns, and deliver personalized content. These technologies
              help us understand how our 10,000+ users interact with our 5+
              curated roadmaps and 10+ resume examples.
            </li>
            <li className="icon-paragraph">
              <strong>Location Information:</strong> We collect generalized
              location data (city/country level) based on your IP address to
              provide region-specific resource recommendations and career
              guidance relevant to your geographic market.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            3. Detailed Use of Your Information
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Service Delivery & Personalization:</strong> We use your
              information to provide, maintain, and continuously improve our
              curated educational services. This includes personalizing your
              learning dashboard, recommending specific resources from our
              curated collections, adapting roadmap progression based on your
              skill level, and customizing content to match your learning style
              and career objectives.
            </li>
            <li className="icon-paragraph">
              <strong>Platform Optimization & Analytics:</strong> We analyze
              aggregated user data to identify platform usage trends, measure
              the effectiveness of our curated resources, optimize our curation
              algorithms, improve user interface design, enhance platform
              performance, and develop new features that benefit our entire
              learning community.
            </li>
            <li className="icon-paragraph">
              <strong>Communication & User Support:</strong> We use your contact
              information to send important platform updates, service
              announcements, security alerts, learning reminders, progress
              reports, personalized recommendations, and responsive customer
              support. We may also send promotional communications about new
              curated roadmaps, features, or partnerships, which you can opt-out
              of at any time.
            </li>
            <li className="icon-paragraph">
              <strong>Security & Fraud Prevention:</strong> We employ your
              information to monitor, detect, prevent, and investigate potential
              security breaches, fraudulent activities, unauthorized platform
              access, terms of service violations, and other malicious
              activities that could harm our platform or users.
            </li>
            <li className="icon-paragraph">
              <strong>Research & Development:</strong> We use anonymized and
              aggregated data to conduct educational research, analyze learning
              effectiveness, identify skill gap trends, improve our curation
              methodology, and contribute to the broader understanding of online
              education and career development patterns.
            </li>
            <li className="icon-paragraph">
              <strong>Legal Compliance & Enforcement:</strong> We process your
              information to comply with applicable laws, regulations, legal
              processes, governmental requests, enforce our Terms of Service,
              protect our legal rights, privacy, safety, and property, and that
              of our users and the public.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            4. Legal Basis for Processing Under Indian Law
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Explicit Consent:</strong> By voluntarily creating an
              account, using our Services, and providing your information, you
              grant explicit consent for us to process your personal data for
              the specific purposes outlined in this Privacy Policy. You may
              withdraw consent at any time, though this may limit your access to
              certain platform features.
            </li>
            <li className="icon-paragraph">
              <strong>Contractual Necessity:</strong> We process your
              information when necessary to fulfill our contractual obligations
              to provide you with access to our curated educational resources,
              personalized learning paths, progress tracking, and other Services
              you request.
            </li>
            <li className="icon-paragraph">
              <strong>Legitimate Business Interests:</strong> We process data
              for our legitimate interests in operating, improving, securing,
              and promoting our Platform, provided these interests are not
              overridden by your data protection rights. This includes platform
              analytics, user support, marketing, and research activities.
            </li>
            <li className="icon-paragraph">
              <strong>Legal Compliance:</strong> We process your information
              when necessary to comply with legal obligations under Indian laws
              including the Information Technology Act, 2000, Digital Personal
              Data Protection Act, 2023, and other applicable regulations.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            5. Comprehensive Information Sharing & Disclosure
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Strict No-Sale Policy:</strong> Unisire does not and will
              not sell, trade, rent, or otherwise monetize your personal
              information to third parties. Your data privacy is fundamental to
              our platform's ethics and operations.
            </li>
            <li className="icon-paragraph">
              <strong>Trusted Service Providers:</strong> We may share your
              information with carefully vetted third-party service providers
              who perform services on our behalf under strict contractual data
              protection obligations. These include cloud hosting providers,
              analytics services, email service providers, customer support
              platforms, and payment processors (if applicable in future).
            </li>
            <li className="icon-paragraph">
              <strong>Educational Partners & Affiliates:</strong> With your
              explicit consent, we may share limited information with our
              educational partners, affiliate organizations, or institutional
              collaborators to provide enhanced services, though we never share
              sensitive personal data without additional explicit permission.
            </li>
            <li className="icon-paragraph">
              <strong>Legal Requirements & Law Enforcement:</strong> We may
              disclose your information when required by law, subpoena, court
              order, or other legal processes; to exercise our legal rights; to
              defend against legal claims; or to investigate, prevent, or take
              action regarding illegal activities, suspected fraud, potential
              threats to physical safety, violations of our Terms of Service, or
              as otherwise required by law.
            </li>
            <li className="icon-paragraph">
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, reorganization, bankruptcy, or sale of all or
              substantially all of our assets, your information may be
              transferred to the successor entity, subject to the commitments in
              this Privacy Policy.
            </li>
            <li className="icon-paragraph">
              <strong>Aggregated & Anonymized Data:</strong> We may share
              aggregated, anonymized, or de-identified information that cannot
              reasonably be used to identify you for research, analytics, trend
              analysis, platform improvement, and partnership discussions.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            6. External Links & Third-Party Services
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Curated External Resources:</strong> Our Platform contains
              carefully curated references to external educational resources, AI
              tools, websites, and learning platforms. When you click on these
              external links, you leave Unisire and become subject to the
              privacy policies, terms of service, and data practices of those
              third-party platforms.
            </li>
            <li className="icon-paragraph">
              <strong>Third-Party Content Ownership:</strong> We do not claim
              ownership over any external resources, AI tools, or educational
              content referenced on our platform. All copyrights, trademarks,
              and intellectual property rights belong to their respective
              owners.
            </li>
            <li className="icon-paragraph">
              <strong>Content Removal Requests:</strong> If you are the owner of
              any external content referenced on our Platform and wish to have
              it removed, please contact us with verification of ownership and
              specific removal details. We typically process valid removal
              requests within 5-7 business days.
            </li>
            <li className="icon-paragraph">
              <strong>No Endorsement Liability:</strong> Our curation of
              external resources does not constitute endorsement, and we are not
              responsible for the content, privacy practices, or availability of
              these third-party services. We encourage you to review their
              privacy policies before providing any personal information.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            7. Data Security & Protection Measures
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Comprehensive Security Framework:</strong> We implement a
              multi-layered security approach including industry-standard
              encryption (SSL/TLS for data in transit, AES-256 for data at
              rest), regular security audits, vulnerability assessments,
              intrusion detection systems, and access controls to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </li>
            <li className="icon-paragraph">
              <strong>Access Control & Authentication:</strong> We enforce
              strict access controls, role-based permissions, and multi-factor
              authentication for our employees and service providers. Access to
              personal data is limited to authorized personnel who require it to
              perform their job functions.
            </li>
            <li className="icon-paragraph">
              <strong>Regular Security Monitoring:</strong> We continuously
              monitor our systems for potential vulnerabilities and attacks, and
              maintain incident response procedures to address any security
              breaches promptly. Our security team works around the clock to
              protect our platform and user data.
            </li>
            <li className="icon-paragraph">
              <strong>Data Breach Protocols:</strong> In the unlikely event of a
              data breach that compromises your personal information, we will
              promptly notify you and relevant authorities as required by
              applicable law, and take immediate steps to mitigate the breach
              and prevent future occurrences.
            </li>
            <li className="icon-paragraph">
              <strong>User Security Responsibilities:</strong> While we
              implement robust security measures, you also play a crucial role
              in protecting your account. We recommend using a strong unique
              password, enabling two-factor authentication if available, logging
              out after each session, and not sharing your account credentials
              with others.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            8. Data Retention & Deletion Policies
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Retention Periods:</strong> We retain your personal
              information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period
              is required or permitted by law. Typical retention periods
              include:
              <ul>
                <li>Account information: Until account deletion request</li>
                <li>Learning progress data: 3 years after last activity</li>
                <li>Communication records: 2 years from last interaction</li>
                <li>
                  Technical logs: 1 year for security and analytics purposes
                </li>
                <li>Legal compliance data: As required by applicable laws</li>
              </ul>
            </li>
            <li className="icon-paragraph">
              <strong>Account Deletion:</strong> You may request deletion of
              your account and associated personal data at any time by
              contacting us. We will process deletion requests within 30 days,
              though some data may be retained in backup systems for additional
              periods as necessary for legal compliance or legitimate business
              purposes.
            </li>
            <li className="icon-paragraph">
              <strong>Data Anonymization:</strong> After the retention period
              expires, we either securely delete your personal data or anonymize
              it so it can no longer be associated with you, then use it for
              analytical purposes to improve our Services.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            9. Your Comprehensive Data Rights
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Right to Access & Portability:</strong> You have the right
              to request a copy of all personal information we hold about you in
              a structured, machine-readable format. You may also request
              details about how we process your data and the categories of third
              parties with whom we share it.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Correction:</strong> You may update, correct, or
              modify your personal information at any time through your account
              settings or by contacting us. We encourage you to keep your
              information current to ensure accurate service delivery.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Deletion:</strong> You can request deletion of
              your personal information, subject to certain exceptions where we
              need to retain data for legal compliance, fraud prevention, or
              legitimate business purposes.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Restrict Processing:</strong> You may request
              that we temporarily or permanently stop processing all or some of
              your personal information in certain circumstances.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Object:</strong> You may object to our processing
              of your personal information for direct marketing purposes or
              where we process based on legitimate interests.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Withdraw Consent:</strong> Where we rely on your
              consent to process personal information, you have the right to
              withdraw that consent at any time, without affecting the
              lawfulness of processing based on consent before its withdrawal.
            </li>
            <li className="icon-paragraph">
              <strong>Right to Lodge Complaints:</strong> You have the right to
              file a complaint with the relevant data protection authority if
              you believe our processing of your personal information violates
              applicable data protection laws.
            </li>
            <li className="icon-paragraph">
              To exercise any of these rights, please contact us. We will
              respond to all legitimate requests within 30 days, though complex
              requests may require additional time. We may need to verify your
              identity before processing certain requests to protect your data
              security.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            10. International Data Transfers
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Global Service Operations:</strong> As a digital platform
              serving users worldwide, your personal information may be
              processed, transferred to, and stored in countries outside of your
              country of residence, including India where our primary operations
              are based.
            </li>
            <li className="icon-paragraph">
              <strong>Adequate Protection Measures:</strong> When we transfer
              your personal information outside your home country, we implement
              appropriate safeguards as required by applicable data protection
              laws, including standard contractual clauses, binding corporate
              rules, or other approved mechanisms to ensure your data receives
              adequate protection.
            </li>
            <li className="icon-paragraph">
              <strong>Service Provider Compliance:</strong> All international
              third-party service providers are contractually obligated to
              protect your personal information with security standards at least
              as protective as those described in this Privacy Policy.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            11. Children's Privacy Protection
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Age Restrictions:</strong> Unisire does not knowingly
              collect personal information from children under the age of 13. If
              you are under 13, please do not attempt to register for our
              Services or send any personal information about yourself to us.
            </li>
            <li className="icon-paragraph">
              <strong>Parental Consent:</strong> If we learn that we have
              collected personal information from a child under age 13 without
              verification of parental consent, we will delete that information
              promptly. If you believe that a child under 13 may have provided
              us with personal information, please contact us.
            </li>
            <li className="icon-paragraph">
              <strong>Teen Users:</strong> Users between 13 and 18 years of age
              must obtain parental or guardian consent before using our Services
              or providing any personal information. We encourage parents and
              guardians to monitor their children's online activities and help
              enforce our Privacy Policy by instructing children never to
              provide personal information without their permission.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            12. Platform Evolution & Future Features
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Continuous Improvement:</strong> Unisire is continuously
              evolving to better serve our growing community. Our development
              roadmap includes advanced features such as interview preparation
              modules, resume building tools, job/internship integrations,
              enhanced progress tracking, and personalized AI-driven
              recommendations.
            </li>
            <li className="icon-paragraph">
              <strong>Expansion Plans:</strong> We plan to expand our curated
              offerings from 5+ to 10+ specialized learning roadmaps based on
              user demand, industry trends, and emerging technologies. Our
              resume reference library will grow to include more diverse career
              paths and success stories.
            </li>
            <li className="icon-paragraph">
              <strong>Data-Driven Enhancements:</strong> Our platform
              improvements are heavily influenced by aggregated user analytics,
              success metrics, and community feedback. We continuously refine
              our curation algorithms and resource selection criteria based on
              what delivers the best learning outcomes.
            </li>
            <li className="icon-paragraph">
              <strong>Privacy by Design:</strong> All new features and platform
              enhancements are developed with privacy considerations integrated
              from the initial design phase, ensuring we maintain our commitment
              to data protection as we grow and evolve.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            13. Policy Updates & Changes
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>Policy Revisions:</strong> We may update this Privacy
              Policy periodically to reflect changes in our practices, services,
              technologies, legal requirements, or business processes. The "Last
              Updated" date at the top of this policy indicates when the most
              recent changes were made.
            </li>
            <li className="icon-paragraph">
              <strong>Notification of Material Changes:</strong> If we make
              material changes to this Privacy Policy that expand our rights to
              use the personal information we have already collected from you,
              we will notify you either by prominently posting a notice of such
              changes before they take effect or by directly sending you a
              notification via email or platform message.
            </li>
            <li className="icon-paragraph">
              <strong>Continued Use as Acceptance:</strong> Your continued use
              of our Services after any modification to this Privacy Policy will
              constitute your acceptance of such changes. We encourage you to
              periodically review this page for the latest information on our
              privacy practices.
            </li>
            <li className="icon-paragraph">
              <strong>Historical Versions:</strong> We maintain archives of
              previous versions of this Privacy Policy for your review. If you
              would like to access a previous version, please contact us.
            </li>
          </ul>

          <h3 className="career-requirements lower">
            14. Contact Information & Grievance Officer
          </h3>
          <ul>
            <li className="icon-paragraph">
              <strong>General Inquiries:</strong> For questions about this
              Privacy Policy, our data practices, or your personal information,
              please contact us.
            </li>
            <li className="icon-paragraph">
              <strong>Data Protection Officer:</strong> For specific data
              protection concerns, exercise of your data rights, or data-related
              complaints, please contact us.
            </li>
            <li className="icon-paragraph">
              <strong>Copyright & Content Removal:</strong> For copyright
              concerns or removal requests regarding external content, please
              contact us.
            </li>
            <li className="icon-paragraph">
              <strong>Grievance Officer:</strong> As required under Indian law,
              we have appointed a Grievance Officer who can be contact us. The
              Grievance Officer will address your concerns within 30 days of
              receipt.
            </li>
            <li className="icon-paragraph">
              <strong>Mailing Address:</strong> Unisire Education Platform,
              Gurugram, India
            </li>
            <li className="icon-paragraph">
              We are committed to working with you to obtain a fair resolution
              of any complaint or concern about privacy. If, however, you
              believe that we have not been able to assist with your complaint
              or concern, you have the right to make a complaint to the relevant
              data protection authority in your jurisdiction.
            </li>
          </ul>

          <p
            className="paragraph-primary"
            style={{ marginTop: "2rem", fontStyle: "italic" }}
          >
            By using Unisire, you acknowledge that you have read, understood,
            and consent to the data practices described in this comprehensive
            Privacy Policy. We thank you for trusting us with your educational
            journey and are committed to protecting your privacy as we help you
            achieve your learning and career goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
