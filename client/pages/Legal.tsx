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
          <p className="text-sm text-muted-foreground">Effective date: {new Date().toLocaleDateString()}</p>

          <p>
            This Privacy Policy explains how BizPaySol ("we", "us", "our") collects, uses, shares, and
            protects personal information in connection with our Enterprise ACH platform, APIs, and
            related services (the "Services").
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Account and Profile Data</strong>: business contact details, login information, and
              communications.
            </li>
            <li>
              <strong>Transaction and Bank Data</strong>: ACH routing/account tokens, transaction amounts,
              remittance data, return codes, and metadata necessary to process transactions (we avoid
              storing raw bank account numbers where tokenization or vaulting is available).
            </li>
            <li>
              <strong>Usage and Device Data</strong>: logs, diagnostics, IP address, browser, and device
              identifiers.
            </li>
            <li>
              <strong>Support and Communications</strong>: emails, tickets, and records of interactions.
            </li>
            <li>
              <strong>Third‑Party Sources</strong>: information from bank partners, service providers, or
              your authorized integrations.
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>Provide, secure, and operate the Services, including processing ACH transactions.</li>
            <li>Authenticate, prevent fraud and abuse, monitor performance, and ensure compliance.</li>
            <li>Improve the Services, develop new features, and conduct analytics.</li>
            <li>Communicate with you about updates, security, and support.</li>
            <li>Comply with legal obligations and network rules (e.g., NACHA).</li>
          </ul>

          <h2>Legal Bases (EEA/UK where applicable)</h2>
          <ul>
            <li>Performance of a contract (to provide the Services).</li>
            <li>Legitimate interests (security, fraud prevention, improvement).</li>
            <li>Consent (where required by law for specific processing).</li>
            <li>Compliance with legal obligations.</li>
          </ul>

          <h2>Sharing of Information</h2>
          <ul>
            <li>With bank partners, ACH networks, and service providers acting on our behalf.</li>
            <li>To comply with law, regulation, or valid legal process, or to protect rights and safety.</li>
            <li>In connection with a corporate transaction (e.g., merger or acquisition).</li>
          </ul>
          <p>
            We require service providers to implement appropriate safeguards and only process information
            as instructed by us.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide the Services, meet legal,
            accounting, or reporting obligations, and enforce our agreements. ACH‑related records are
            typically retained in accordance with NACHA and applicable banking requirements.
          </p>

          <h2>Security</h2>
          <p>
            We employ administrative, technical, and physical safeguards designed to protect personal
            information, including encryption in transit and at rest, access controls, logging, and
            monitoring. No system can be guaranteed 100% secure.
          </p>

          <h2>International Transfers</h2>
          <p>
            Where personal information is transferred across borders, we rely on appropriate safeguards
            (such as standard contractual clauses) as required by applicable law.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or port your
            personal information, and to object to or restrict certain processing. To exercise rights,
            contact us at <a href="mailto:support@bizpaysol.com">support@bizpaysol.com</a>. We may need
            to verify your identity before responding.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            The Services are not directed to individuals under the age of 16, and we do not knowingly
            collect personal information from children.
          </p>

          <h2>Do Not Track</h2>
          <p>
            We do not currently respond to browser “Do Not Track” signals.
          </p>

          <h2>Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be posted on this
            page with an updated effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions or requests: <a href="mailto:support@bizpaysol.com">support@bizpaysol.com</a> or
            <a href="mailto:info@bizpaysol.com">info@bizpaysol.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
