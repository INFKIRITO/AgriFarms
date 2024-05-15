import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy Policy: This policy outlines how you collect, use, disclose, and protect users' personal information. It should cover what data you collect (such as names, email addresses, browsing history), how you use it (e.g., for marketing purposes, improving user experience), and how users can access, update, or delete their information.</p>
          <p>Terms of Service: This policy sets out the rules and guidelines for using your website or service. It covers issues such as user conduct, content ownership, copyright infringement, disclaimers of liability, and dispute resolution procedures.</p>
          <p>Cookie Policy: This policy explains how you use cookies and similar tracking technologies on your website. It should inform users about the types of cookies you use, their purpose, how users can manage or disable cookies, and any third-party services that may also collect data through cookies.</p>
          <p>Refund and Return Policy: If you sell products or services on your website, a refund and return policy is essential. This policy outlines the terms and conditions for returns, refunds, exchanges, and cancellations. It should cover issues such as eligibility criteria, time limits, restocking fees, and shipping costs.</p>
          <p>Copyright Policy: This policy explains how you handle copyright infringement claims regarding content posted on your website by users or third parties. It should outline the procedures for reporting and removing infringing content, as well as the consequences for repeat offenders.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
