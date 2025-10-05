import Layout from "@/components/layout/Layout";

export function Terms() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container prose prose-slate max-w-3xl">
          <h1 className="mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Effective date: {new Date().toLocaleDateString()}</p>

          <p>
            These Terms of Service (the “Terms”) govern your access to and use of the BizPaySol
            Enterprise ACH software-as-a-service platform, APIs, documentation, websites, and related
            services (collectively, the “Services”). By accessing or using the Services, you agree to
            these Terms.
          </p>

          <h2>1. Eligibility; Account Registration</h2>
          <ul>
            <li>You must have authority to bind the entity on whose behalf you use the Services.</li>
            <li>You will maintain accurate account information and safeguard API keys and credentials.</li>
            <li>You are responsible for all activity under your account and keys.</li>
          </ul>

          <h2>2. License and Acceptable Use</h2>
          <p>
            Subject to these Terms, BizPaySol grants you a limited, non-exclusive, non-transferable
            license to access and use the Services and SDKs solely for your internal business purposes.
            You will not: (a) reverse engineer or attempt to derive source code; (b) circumvent security
            or rate limits; (c) use the Services for unlawful, harmful, or high-risk activities; (d)
            misrepresent transaction data; (e) probe, scan, or test for vulnerabilities; or (f) resell
            or offer the Services on a service-bureau basis without our written consent.
          </p>

          <h2>3. Compliance (NACHA, OFAC, AML)</h2>
          <p>
            You represent and warrant that your use of the Services will comply with applicable law and
            network rules, including without limitation NACHA Operating Rules, OFAC sanctions, and
            anti-money-laundering requirements. You are solely responsible for the origination,
            authorization, and accuracy of ACH transactions you initiate through the Services and for
            retaining required authorizations and records.
          </p>

          <h2>4. Third-Party Services and Bank Partners</h2>
          <p>
            The Services may interoperate with third‑party services, bank partners, or providers.
            BizPaySol is not responsible for third‑party services or their terms. Your use of such
            services is governed by their terms and policies.
          </p>

          <h2>5. Fees; Taxes</h2>
          <p>
            Fees are set forth in an order, pricing page, or separate agreement. Unless otherwise stated,
            fees are exclusive of taxes, which you are responsible to pay. Overdue amounts may accrue
            interest at the lesser of 1.5% per month or the maximum allowed by law.
          </p>

          <h2>6. Service Levels; Changes</h2>
          <p>
            We aim for high availability and offer enterprise support as specified in an applicable
            order. We may modify features, update APIs, or deprecate functionality with reasonable
            notice where practicable. You should ensure your applications can accommodate API changes.
          </p>

          <h2>7. Customer Data; Security</h2>
          <p>
            “Customer Data” means data you or your users submit to the Services. You retain ownership of
            Customer Data. We implement administrative, technical, and physical safeguards designed to
            protect Customer Data, including encryption in transit and at rest. You are responsible for
            obtaining necessary rights and consents to submit Customer Data to the Services.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            Each party will protect the other party’s confidential information with the same degree of
            care it uses to protect its own similar information and not less than a reasonable degree of
            care. Confidential information excludes information that is public through no fault of the
            recipient, was known before receipt, or was independently developed without use of the
            disclosing party’s confidential information.
          </p>

          <h2>9. Intellectual Property; Feedback</h2>
          <p>
            BizPaySol and its licensors retain all rights in the Services. You grant BizPaySol a
            non‑exclusive, perpetual, irrevocable, royalty‑free license to use feedback you provide to
            improve the Services and develop new products.
          </p>

          <h2>10. Term; Suspension; Termination</h2>
          <ul>
            <li>We may suspend the Services for security risk, suspected fraud, or material breach.</li>
            <li>Either party may terminate for uncured material breach after 30 days’ notice.</li>
            <li>Upon termination, your access ends and you must stop using the Services and SDKs.</li>
          </ul>

          <h2>11. Data Export and Deletion</h2>
          <p>
            Upon written request within 30 days after termination, and subject to legal retention
            obligations, we will make Customer Data available for export in a reasonable format. We will
            then delete or anonymize Customer Data from active systems, subject to backups and legal
            holds.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You will defend and indemnify BizPaySol against claims arising from (a) your use of the
            Services in violation of these Terms or law; (b) your applications, data, or content; or (c)
            your ACH origination activities, including authorization and return claims.
          </p>

          <h2>13. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
            OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON‑INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR‑FREE OR UNINTERRUPTED.
          </p>

          <h2>14. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY IS LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, COVER, OR PUNITIVE DAMAGES, OR LOST PROFITS OR REVENUE.
            EXCEPT FOR PAYMENT OBLIGATIONS OR INDEMNIFICATION FOR THIRD‑PARTY CLAIMS, EACH PARTY’S TOTAL
            LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID OR PAYABLE BY YOU TO BIZPAYSOL
            FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>15. Governing Law; Venue</h2>
          <p>
            These Terms are governed by the laws of the State of Georgia, without regard to conflict of
            laws principles. The parties consent to the exclusive jurisdiction and venue of the state and
            federal courts located in Atlanta, Georgia.
          </p>

          <h2>16. Changes; Notices; Assignment</h2>
          <ul>
            <li>We may update these Terms; material changes will be posted to our site with notice.</li>
            <li>Notices to BizPaySol: info@bizpaysol.com. Notices to you: your account email.</li>
            <li>You may not assign these Terms without consent; we may assign to an affiliate or in a merger.</li>
          </ul>

          <h2>17. Publicity; Force Majeure; Entire Agreement</h2>
          <p>
            We may use your name and logo to identify you as a customer unless you opt out in writing.
            Neither party is liable for delays due to causes beyond reasonable control. These Terms,
            together with any order(s) or policies referenced herein, form the entire agreement.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export function Privacy() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container prose prose-slate max-w-3xl">
          <h1 className="mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Effective Date: October 5, 2025</p>

          <p>
            This Privacy Policy describes how BizPaySol, a division of Enterprise Payment Solutions LLC ("BizPaySol," "we," "us," or "our") collects, uses, discloses, and safeguards personal information when you use our enterprise ACH processing platform, APIs, and related services (collectively, the "Services"). As a business-to-business (B2B) provider, our Services are intended for authorized business representatives and entities, and we process information primarily in a professional context. We are committed to protecting your privacy and complying with applicable laws, including but not limited to GDPR (for EEA/UK users) and CCPA/CPRA (for California residents where applicable).
          </p>
          <p>
            By using the Services, you consent to the practices described in this Policy. If you do not agree, please do not use the Services.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect only the minimum personal information necessary to provide our Services (data minimization principle). This includes:</p>
          <ul>
            <li><strong>Account and Profile Data:</strong> Business contact details (e.g., name, email, phone, company name), login credentials, and communication preferences.</li>
            <li><strong>Transaction and Financial Data:</strong> Tokenized ACH routing and account numbers, transaction amounts, remittance information, return codes, and related metadata required for processing. We do not store raw bank account numbers; instead, we use tokenization, vaulting, or other secure methods to pseudonymize sensitive data where feasible.</li>
            <li><strong>Usage and Technical Data:</strong> Service logs, error diagnostics, IP addresses, browser types, device identifiers, and usage analytics to monitor performance.</li>
            <li><strong>Support and Communications Data:</strong> Records of emails, support tickets, chat interactions, and feedback.</li>
            <li><strong>Third-Party Data:</strong> Information obtained from authorized integrations, bank partners, payment networks (e.g., NACHA), or service providers you connect with us.</li>
          </ul>
          <p>We do not collect sensitive personal information (e.g., health or biometric data) unless explicitly required for fraud prevention and only with your consent.</p>

          <h2>How We Use Your Information</h2>
          <p>We use personal information for legitimate business purposes, including:</p>
          <ul>
            <li>Delivering, maintaining, and improving the Services, such as processing ACH transactions and generating reports.</li>
            <li>Authenticating users, detecting and preventing fraud, abuse, or security incidents, and ensuring compliance with financial regulations (e.g., NACHA rules, anti-money laundering laws).</li>
            <li>Conducting internal analytics, research, and development to enhance features and user experience (using aggregated or de-identified data where possible).</li>
            <li>Communicating with you about Service updates, billing, security alerts, or support requests. We may send marketing communications about new features only if you opt in.</li>
            <li>Meeting legal, regulatory, or contractual obligations, including audits and dispute resolution.</li>
          </ul>
          <p>We do not use your information for automated decision-making that produces legal effects without human oversight, except where necessary for fraud detection (with opt-out options where required by law).</p>

          <h2>Legal Bases for Processing (EEA/UK and Applicable Jurisdictions)</h2>
          <p>For users in the EEA, UK, or other regions with similar requirements, our processing is based on:</p>
          <ul>
            <li><strong>Contractual Necessity:</strong> To perform our agreement with you or your organization (e.g., providing ACH processing).</li>
            <li><strong>Legitimate Interests:</strong> For security, fraud prevention, Service improvement, and internal operations, balanced against your rights.</li>
            <li><strong>Consent:</strong> For non-essential processing, such as certain marketing or cookies, which you can withdraw at any time.</li>
            <li><strong>Legal Obligations:</strong> To comply with laws like GDPR, CCPA, or NACHA rules.</li>
          </ul>
          <p>For California residents under CCPA/CPRA, we do not “sell” or “share” personal information as defined therein, and you have additional rights (see “Your Rights” below).</p>

          <h2>Sharing of Information</h2>
          <p>We share personal information only as necessary and with appropriate protections:</p>
          <ul>
            <li><strong>Service Providers and Partners:</strong> With banks, ACH networks (e.g., Federal Reserve or The Clearing House), payment processors, and vendors who assist in delivering the Services (e.g., cloud hosting, analytics tools). These parties are contractually bound to use data only as instructed and maintain safeguards.</li>
            <li><strong>Legal and Safety Purposes:</strong> To comply with laws, respond to lawful requests (e.g., subpoenas), or protect our rights, property, or safety (including yours or others’).</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, where data may be transferred as a business asset (with notice where required).</li>
            <li><strong>Aggregated/De-Identified Data:</strong> Anonymized or aggregated data may be shared for research or industry benchmarking.</li>
          </ul>
          <p>We do not share data with third parties for their own marketing without your explicit opt-in consent.</p>

          <h2>Data Retention and Deletion</h2>
          <p>We retain personal information only as long as needed to fulfill the purposes outlined above, or as required by law:</p>
          <ul>
            <li><strong>Transaction data:</strong> Typically 7 years to comply with NACHA, banking regulations, and tax laws.</li>
            <li><strong>Account data:</strong> Until your account is deleted, plus a reasonable period for backups or disputes.</li>
            <li><strong>Usage logs:</strong> Up to 12 months for security and analytics.</li>
          </ul>
          <p>Upon request or account closure, we securely delete or anonymize data where possible, subject to legal retention requirements. For details on our deletion process, contact us.</p>

          <h2>Security of Your Information</h2>
          <p>We prioritize data security with industry-standard measures, including:</p>
          <ul>
            <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256).</li>
            <li>Role-based access controls, multi-factor authentication, and regular security audits.</li>
            <li>Vulnerability monitoring, penetration testing, and incident response protocols.</li>
          </ul>
          <p>While we strive for robust protection, no online system is entirely risk-free. We notify affected users and regulators of breaches as required by law.</p>

          <h2>International Data Transfers</h2>
          <p>As a U.S.-based company, we may transfer data to countries outside your jurisdiction (e.g., to affiliates or providers in the EEA or Asia). For EEA/UK transfers, we use approved safeguards like Standard Contractual Clauses (SCCs), adequacy decisions, or the EU-U.S. Data Privacy Framework (where applicable). You can request details on transfer mechanisms by contacting us.</p>

          <h2>Your Privacy Rights</h2>
          <p>Your rights vary by jurisdiction. Generally, you (or your organization’s authorized representative) may:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal information.</li>
            <li><strong>Correction:</strong> Update inaccurate data.</li>
            <li><strong>Deletion:</strong> Request removal (subject to legal exceptions).</li>
            <li><strong>Portability:</strong> Receive data in a structured format (where applicable).</li>
            <li><strong>Objection/Restriction:</strong> Object to processing based on legitimate interests or restrict it in certain cases.</li>
            <li><strong>Withdraw Consent:</strong> At any time, without affecting prior processing.</li>
          </ul>
          <p><strong>CCPA-Specific Rights (for California residents):</strong> Opt out of “sales/sharing” (though we do not engage in these), limit sensitive data use, and non-discrimination for exercising rights.</p>
          <p>To exercise these rights, submit a verifiable request to <a href="mailto:privacy@bizpaysol.com">privacy@bizpaysol.com</a>. We respond within 45 days (extendable if needed) and verify identity via secure methods (e.g., account login or documentation). For complaints, contact us or your local data protection authority (e.g., ICO in the UK).</p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>We use essential cookies for Service functionality and optional analytics cookies for improvement. You can manage preferences via browser settings. We do not use third-party advertising trackers.</p>

          <h2>Do Not Track Signals</h2>
          <p>We do not currently alter our data practices based on browser “Do Not Track” signals, but honor opt-outs for analytics where available.</p>

          <h2>Children’s Privacy</h2>
          <p>Our Services are not intended for children under 16 (or 13 in the U.S. under COPPA). We do not knowingly collect data from minors and will delete it if discovered. If you believe we have, contact us immediately.</p>

          <h2>Changes to This Policy</h2>
          <p>We may revise this Policy to reflect legal, operational, or Service changes. Minor updates will be posted here with the new effective date; material changes will also be emailed to registered users at least 30 days in advance. Continued use after changes constitutes acceptance.</p>

          <h2>Contact Us</h2>
          <p>
            For questions, rights requests, or concerns: Email <a href="mailto:privacy@bizpaysol.com">privacy@bizpaysol.com</a> (preferred for privacy matters) or <a href="mailto:support@bizpaysol.com">support@bizpaysol.com</a>.
          </p>
          <p>If you are in the EEA/UK, you may also contact your local data protection authority.</p>
        </div>
      </section>
    </Layout>
  );
}
