import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { setPageMeta } from "@/lib/seo";

export function Terms() {
  useEffect(() => {
    setPageMeta({
      title: "Terms of Service - BizPaySol",
      description: "BizPaySol Terms of Service for ACH payment platform. Effective October 5, 2025. Read our full terms and conditions.",
      canonicalUrl: "https://www.bizpaysol.com/terms/",
      noindex: true
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container prose prose-slate max-w-3xl">
          <h1 className="mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Effective Date: October 5, 2025</p>

          <p>
            These Terms of Service (the “Terms”) form a binding agreement between BizPaySol, a division of Enterprise Payment Solutions LLC (“BizPaySol,” “we,” “us,” or “our”) and you or the entity you represent (“you,” “your,” or “Customer”). They govern your access to and use of our enterprise ACH processing software-as-a-service platform, application programming interfaces (APIs), software development kits (SDKs), documentation, websites, and related services (collectively, the “Services”).
          </p>
          <p>
            Our Services are designed for business-to-business (B2B) use by authorized representatives of commercial entities for processing Automated Clearing House (ACH) transactions. By creating an account, accessing, or using the Services, you represent that you have the authority to bind your organization to these Terms and agree to be bound by them. If you do not have such authority or do not agree with these Terms, you must not use the Services.
          </p>
          <p>
            These Terms incorporate by reference our <a href="/privacy">Privacy Policy</a> and any applicable ordering documents, service level agreements (SLAs), or addendums (collectively, the “Order”). In the event of a conflict, the Order controls as to its specific terms.
          </p>

          <h2>1. Eligibility and Account Registration</h2>
          <p>To use the Services, you must:</p>
          <ul>
            <li>Be at least 18 years old and have the legal capacity to enter into contracts.</li>
            <li>Be an authorized representative of a valid business entity with the power to bind that entity to these Terms.</li>
            <li>Provide accurate, complete, and current information during registration, including business contact details and tax identification.</li>
          </ul>
          <p>You agree to:</p>
          <ul>
            <li>Maintain the accuracy of your account information and promptly update it as needed.</li>
            <li>Safeguard your login credentials, API keys, tokens, and other access methods. You are responsible for all activities under your account, including unauthorized use, and must notify us immediately at <a href="mailto:support@bizpaysol.com">support@bizpaysol.com</a> of any suspected breach.</li>
            <li>Comply with any additional eligibility requirements specified in an Order.</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts for violations of these Terms or suspected fraudulent activity.</p>

          <h2>2. License Grant and Acceptable Use</h2>
          <p><strong>License:</strong> Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-sublicensable, non-transferable, revocable license during the Term (as defined below) to access and use the Services solely for your internal business purposes in connection with ACH processing. This includes integrating our APIs and SDKs into your authorized applications.</p>
          <p><strong>Restrictions:</strong> You will not, and will not permit others to:</p>
          <ul>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or underlying structure of the Services.</li>
            <li>Copy, modify, distribute, sell, lease, or commercially exploit the Services except as expressly permitted.</li>
            <li>Use the Services to process transactions on behalf of third parties (service bureau use) without our prior written consent.</li>
            <li>Circumvent, disable, or otherwise interfere with security features, rate limits, or usage restrictions.</li>
            <li>Engage in unlawful, harmful, abusive, or high-risk activities (e.g., processing payments for illegal goods, gambling, or pharmaceuticals without proper licensing).</li>
            <li>Probe, scan, or test the vulnerability of the Services without our explicit permission (e.g., no penetration testing).</li>
            <li>Misrepresent transaction data, including amounts, purposes, or authorizations.</li>
            <li>Use the Services in violation of applicable laws, regulations, or network rules.</li>
          </ul>
          <p>We may monitor use to enforce compliance and reserve the right to take corrective action, including suspending access.</p>

          <h2>3. User Responsibilities and Compliance</h2>
          <p>You are solely responsible for:</p>
          <ul>
            <li>Ensuring all ACH transactions you initiate comply with applicable laws, including but not limited to the NACHA Operating Rules and Guidelines, Office of Foreign Assets Control (OFAC) sanctions, Bank Secrecy Act (BSA)/anti-money laundering (AML) requirements, and electronic funds transfer regulations.</li>
            <li>Obtaining and retaining verifiable authorizations, consents, and records for all transactions, returns, and disputes as required by law or network rules.</li>
            <li>The accuracy, completeness, and legality of all data you submit (“Customer Data”), including verifying end-user permissions.</li>
          </ul>
          <p>You represent and warrant that your use of the Services will not violate any third-party rights, including intellectual property or privacy rights. We may require documentation of your compliance upon request.</p>

          <h2>4. Third-Party Services and Integrations</h2>
          <p>The Services may enable or require integration with third-party services, such as bank partners, payment networks (e.g., Federal Reserve or The Clearing House), or your chosen software providers. Your access to and use of these third-party services is governed solely by their terms and policies, at your own risk.</p>
          <p>We are not responsible for:</p>
          <ul>
            <li>The availability, security, or performance of third-party services.</li>
            <li>Any disputes arising from transactions processed through such integrations.</li>
            <li>Changes to third-party APIs that may affect interoperability.</li>
          </ul>
          <p>You agree to indemnify us against claims related to your use of third-party services (see Section 12).</p>

          <h2>5. Fees and Payment Terms</h2>
          <p>Fees for the Services are specified in the applicable Order and may include setup, subscription, transaction-based, or usage fees. Unless otherwise stated:</p>
          <ul>
            <li>Fees are quoted in U.S. dollars and exclusive of applicable taxes, duties, or similar charges, which you are responsible for paying.</li>
            <li>You will pay undisputed invoices within 30 days of receipt via the payment method specified in the Order.</li>
            <li>Overdue amounts accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law, plus collection costs (including reasonable attorneys’ fees).</li>
          </ul>
          <p>We may adjust fees upon renewal of an Order with 60 days’ notice. No refunds will be issued for partial periods, except as required by law. You authorize us to charge your designated payment method and may suspend Services for non-payment after notice.</p>

          <h2>6. Service Levels, Support, and Changes</h2>
          <ul>
            <li>We strive to maintain high availability as detailed in any applicable SLA. Enterprise-level support is provided per the Order, including response times for issues.</li>
            <li>We may temporarily suspend Services for maintenance, security, or emergencies with reasonable notice where feasible.</li>
            <li>We may update, modify, or deprecate features, APIs, or documentation to improve functionality or comply with laws. We will provide at least 30 days’ notice for material API changes and reasonable backward compatibility where possible.</li>
          </ul>
          <p>You are responsible for ensuring your systems and applications are compatible with updates. Continued use after changes constitutes acceptance.</p>

          <h2>7. Customer Data and Security</h2>
          <p><strong>Ownership and Rights:</strong> As between you and us, you retain all right, title, and interest in and to Customer Data. Subject to these Terms, you grant us a worldwide, non-exclusive, royalty-free license to access, use, host, copy, transmit, and display Customer Data solely as necessary to provide, secure, and improve the Services.</p>
          <p><strong>Your Obligations:</strong> You must obtain all necessary rights, consents, and authorizations to submit Customer Data, including from end-users for ACH processing.</p>
          <p><strong>Our Security Measures:</strong> We implement commercially reasonable administrative, technical, and physical safeguards to protect Customer Data, including encryption in transit (TLS 1.3) and at rest (AES-256), access controls, and regular audits. Details are in our Privacy Policy. You agree to use secure methods when interacting with the Services.</p>

          <h2>8. Confidentiality</h2>
          <p>Each party (the “Receiving Party”) agrees to:</p>
          <ul>
            <li>Hold the other party’s (“Disclosing Party”) Confidential Information in strict confidence.</li>
            <li>Use it only for purposes permitted under these Terms.</li>
            <li>Protect it with at least the same degree of care as its own similar information, but no less than reasonable care.</li>
          </ul>
          <p>“Confidential Information” means non-public information disclosed by the Disclosing Party, including business plans, pricing, Customer Data, and technical details. It excludes information that: (i) is or becomes publicly available without breach; (ii) was known to the Receiving Party prior to disclosure; (iii) is independently developed; or (iv) is rightfully received from a third party.</p>
          <p>Upon termination or request, each party will return or destroy the other’s Confidential Information, subject to legal retention needs. This Section survives termination.</p>

          <h2>9. Intellectual Property and Feedback</h2>
          <p><strong>Our Rights:</strong> We and our licensors retain all right, title, and interest in the Services, including all intellectual property rights (e.g., patents, copyrights, trademarks). Any improvements we make using aggregated, anonymized data do not confer rights to you.</p>
          <p><strong>Feedback:</strong> If you provide suggestions, ideas, or feedback (“Feedback”), you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate it into our products without compensation or attribution.</p>

          <h2>10. Term, Termination, and Suspension</h2>
          <p><strong>Term:</strong> These Terms begin on the effective date of your first Order and continue for the initial term specified therein, automatically renewing for successive periods unless terminated.</p>
          <p><strong>Termination:</strong></p>
          <ul>
            <li>Either party may terminate for material breach if the other fails to cure within 30 days of written notice.</li>
            <li>We may terminate for convenience with 60 days’ notice (pro-rated refund if prepaid).</li>
            <li>Upon bankruptcy, insolvency, or cessation of business, the non-affected party may terminate immediately.</li>
          </ul>
          <p><strong>Suspension:</strong> We may suspend your access without notice if we reasonably believe it necessary to prevent fraud, security risks, or legal violations. We will restore access upon resolution.</p>
          <p>Upon termination or expiration: (i) access ends; (ii) you must cease all use; and (iii) outstanding fees become due.</p>

          <h2>11. Data Export and Deletion</h2>
          <p>Within 30 days of termination or expiration, upon your written request, we will provide Customer Data in a reasonably usable electronic format (e.g., CSV or API export), subject to legal retention obligations. Thereafter, we will delete or anonymize Customer Data from active systems within 60 days, excluding backups (which are isolated and deleted within 90 days). You are responsible for downloading data during the Term.</p>

          <h2>12. Indemnification</h2>
          <p>You will defend, indemnify, and hold harmless BizPaySol, its affiliates, officers, directors, employees, and agents from and against all claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys’ fees) arising from:</p>
          <ul>
            <li>Your or your end-users’ use of the Services in breach of these Terms or applicable law.</li>
            <li>Your Customer Data, applications, or ACH origination activities (e.g., unauthorized transactions, returns, or disputes).</li>
            <li>Infringement of third-party rights by your Customer Data or integrations.</li>
          </ul>
          <p>We will provide prompt notice of claims and reasonable cooperation at your expense. We will defend and indemnify you against claims that the Services infringe third-party intellectual property rights, subject to similar conditions.</p>

          <h2>13. Disclaimers</h2>
          <p><strong>AS IS BASIS:</strong> THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR THAT THE SERVICES WILL BE SECURE, TIMELY, ACCURATE, ERROR-FREE, OR UNINTERRUPTED.</p>
          <p>WE DO NOT GUARANTEE ACH TRANSACTION SUCCESS, TIMING, OR RESULTS, AND YOU BEAR ALL RISKS ASSOCIATED WITH TRANSMITTING FUNDS THROUGH THE SERVICES. NO ADVICE FROM US CONSTITUTES FINANCIAL, LEGAL, OR TAX GUIDANCE.</p>

          <h2>14. Limitation of Liability</h2>
          <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY.</p>
          <p>EXCEPT FOR: (i) YOUR PAYMENT OBLIGATIONS; (ii) BREACHES OF CONFIDENTIALITY OR IP RIGHTS; OR (iii) INDEMNIFICATION OBLIGATIONS, EACH PARTY’S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID OR PAYABLE BY YOU TO US FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE FIRST CLAIM.</p>

          <h2>15. Governing Law and Dispute Resolution</h2>
          <p>These Terms are governed by the laws of the State of Tennessee, United States, without regard to conflict of laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
          <p>Any disputes arising from these Terms will be resolved exclusively in the state or federal courts located in Nashville, Tennessee, to whose jurisdiction and venue the parties irrevocably consent. Each party waives any objection to such venue.</p>

          <h2>16. General Provisions</h2>
          <p><strong>Changes:</strong> We may update these Terms to reflect legal, operational, or Service changes. Material changes will be posted on our website with at least 30 days’ notice via email to your registered address. Continued use after notice constitutes acceptance. Minor changes take effect immediately.</p>
          <p><strong>Notices:</strong> Notices must be in writing. To us: <a href="mailto:legal@bizpaysol.com">legal@bizpaysol.com</a> or BizPaySol, Inc., [Insert Business Address], Atlanta, GA [Insert ZIP]. To you: your account email or postal address on file.</p>
          <p><strong>Assignment:</strong> You may not assign these Terms or any rights without our prior written consent. We may assign to affiliates or in connection with a merger, acquisition, or sale of assets.</p>
          <p><strong>Publicity:</strong> We may reference you as a customer and use your name/logo in marketing materials, case studies, or our website, unless you opt out in writing to <a href="mailto:legal@bizpaysol.com">legal@bizpaysol.com</a>.</p>
          <p><strong>Force Majeure:</strong> Neither party is liable for delays or failures due to causes beyond its reasonable control, such as acts of God, pandemics, or network outages (excluding payment obligations).</p>
          <p><strong>Entire Agreement:</strong> These Terms, including incorporated documents, constitute the entire agreement and supersede all prior understandings.</p>
          <p><strong>Severability:</strong> If any provision is held invalid, the remainder remains enforceable.</p>
          <p><strong>Waiver:</strong> No waiver is effective unless in writing. Delay in enforcing rights does not waive them.</p>
          <p><strong>Export Compliance:</strong> You will comply with all applicable export control laws.</p>
          <p><strong>Third-Party Beneficiaries:</strong> These Terms are for the benefit of the parties only and not enforceable by third parties.</p>

          <h2>Contact Us</h2>
          <p>For questions about these Terms, contact <a href="mailto:legal@bizpaysol.com">legal@bizpaysol.com</a> or <a href="mailto:support@bizpaysol.com">support@bizpaysol.com</a>.</p>
        </div>
      </section>
    </Layout>
  );
}

export function Privacy() {
  useEffect(() => {
    setPageMeta({
      title: "Privacy Policy - BizPaySol",
      description: "BizPaySol Privacy Policy. Learn how we protect your data, handle cookies, and comply with GDPR.",
      canonicalUrl: "https://www.bizpaysol.com/privacy/",
      noindex: true
    });
  }, []);

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

          <h2>Governing Law</h2>
          <p>This Privacy Policy is governed by the laws of the State of Tennessee, United States. Any disputes arising under or related to this Policy will be resolved exclusively in the state or federal courts located in Nashville, Tennessee.</p>
        </div>
      </section>
    </Layout>
  );
}
