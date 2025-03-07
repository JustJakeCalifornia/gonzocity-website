import { GonzoModule } from "@/lib/types/modules";
import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TemplateEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  requestReason: "contact" | "trial";
  modules: GonzoModule[];
  message?: string | undefined;
}

export const TemplateEmailProps = ({
  firstName,
  lastName,
  email,
  organization,
  requestReason,
  modules,
  message,
}: TemplateEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={greeting}>Neue Kontaktanfrage</Text>
          <Text style={paragraph}>
            Es hat sich jemand neues gemeldet, der Interesse an{" "}
            <strong>GonzoCity</strong> hat.
          </Text>
        </Section>

        <Section style={detailsSection}>
          <div style={twoColumnGrid}>
            <div>
              <Text style={fieldLabel}>Name</Text>
              <Text style={fieldValue}>{`${firstName} ${lastName}`}</Text>
            </div>

            <div>
              <Text style={fieldLabel}>Email</Text>
              <Text style={fieldValue}>{email}</Text>
            </div>
          </div>

          <div style={twoColumnGrid}>
            <div>
              <Text style={fieldLabel}>Firma</Text>
              <Text style={fieldValue}>{organization}</Text>
            </div>

            <div>
              <Text style={fieldLabel}>Anfragegrund</Text>
              <Text style={fieldValue}>
                {requestReason === "trial"
                  ? "Kostenlose Demoanfrage"
                  : "Kontaktanfrage"}
              </Text>
            </div>
          </div>

          <div style={twoColumnGrid}>
            <div>
              <Text style={fieldLabel}>Ausgewählte Module</Text>
              <Text style={fieldValue}>{modules.join(", ")}</Text>
            </div>
          </div>

          {message && (
            <div style={messageContainer}>
              <Text style={fieldLabel}>Nachricht</Text>
              <Text style={messageText}>{message}</Text>
            </div>
          )}
        </Section>

        {/* <Hr style={hr} />

        <Section style={ctaSection}>
          <Text style={paragraph}>
            Our team will review your request and get back to you within 24
            hours.
          </Text>
          <div style={btnContainer}>
            <Button style={button} href="https://your-website.com/dashboard">
              Access Your Dashboard
            </Button>
          </div>
        </Section>

        <Text style={footer}>
          2024 Koala. All rights reserved.
          <br />
          Your privacy is important to us. View our privacy policy.
        </Text> */}
      </Container>
    </Body>
  </Html>
);

export default TemplateEmailProps;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
};

// const logo = {
//   margin: "0 auto 32px",
//   display: "block",
// };

const headerSection = {
  marginBottom: "32px",
};

const greeting = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 12px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4a5568",
  margin: "0 0 24px",
};

const detailsSection = {
  padding: "32px 0",
};

const twoColumnGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  marginBottom: "32px",
};

const fieldLabel = {
  fontSize: "16px",
  color: "#374151",
  fontWeight: "500",
  marginBottom: "8px",
};

const fieldValue = {
  fontSize: "16px",
  color: "#111827",
  fontWeight: "400",
  margin: "0",
};

const messageContainer = {
  marginTop: "16px",
};

const messageText = {
  fontSize: "16px",
  color: "#111827",
  fontWeight: "400",
  margin: "0",
};

// const ctaSection = {
//   textAlign: "center" as const,
//   marginTop: "32px",
// };

// const btnContainer = {
//   textAlign: "center" as const,
//   margin: "24px 0",
// };

// const button = {
//   backgroundColor: "#5F51E8",
//   borderRadius: "6px",
//   color: "#fff",
//   fontSize: "16px",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "inline-block",
//   padding: "12px 32px",
//   fontWeight: "600",
// };

// const hr = {
//   borderColor: "#e2e8f0",
//   margin: "32px 0",
// };

// const footer = {
//   color: "#8898aa",
//   fontSize: "12px",
//   textAlign: "center" as const,
//   lineHeight: "1.5",
// };
