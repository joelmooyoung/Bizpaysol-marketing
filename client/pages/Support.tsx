import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">We’re here to help.</h1>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold">FAQ</h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">How do I start using the API?</p>
                  <p>Sign up for an account and generate your API key from the dashboard.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Do you offer 24/7 support?</p>
                  <p>Yes, enterprise customers receive around-the-clock coverage.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Support email</p>
                  <p>support@clearach.com</p>
                </div>
              </div>
            </div>
            <div id="contact">
              <h2 className="text-lg font-semibold">Contact Form</h2>
              <form className="mt-4 space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Message" rows={6} />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
