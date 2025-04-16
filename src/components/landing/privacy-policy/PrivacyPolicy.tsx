import { ScrollArea } from "@/components/ui/scroll-area";
import HeadingOne from "../common/custom-ui/HeadingOne";
import { siteConfig } from "@/config/siteConfig";
import Link from 'next/link'

const Privacy = () => {
    return (
        <>
            <HeadingOne title='Privacy Policy' />
            <ScrollArea className="max-h-full overflow-y-auto">
                <div className="space-y-4 mb-10">
                    <section className="mt-2">
                        <p className="mb-3">Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website or services. By using our website, you agree to the terms of this Privacy Policy. If you have any questions or concerns, please contact us using the details provided at the end of this policy.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
                        <p className="mb-3">We may collect the following types of information:</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                Personal Information: Information you voluntarily provide when you register on our site, complete a form, or communicate with us. This may include your name, email address, residential address, mailing address, and phone number.</li>
                            <li>
                                Usage Information: Data on how you interact with our website, including IP addresses, browser type, device information, and pages visited.
                            </li>
                            <li>
                                Cookies and Tracking: See Section 5: Cookies and Tracking Technologies for more details on how we use cookies and other tracking technologies.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect from you for the following purposes:</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                Personalization: To tailor our services and content to your preferences and improve your experience on our website.
                            </li>
                            <li>
                                Website Improvement: To enhance our website based on your feedback and usage patterns.
                            </li>
                            <li>
                                Communication: To send you updates related to our services, your account, or promotions that may interest you. You can opt out of these communications at any time by contacting us.
                            </li>
                            <li>
                                Security and Compliance: To protect against, detect, and prevent fraud and unauthorized activity, and to comply with legal requirements.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">3. Sharing Your Information with Third Parties</h2>
                        <p className="mb-3">We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except in the following cases:</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                Service Providers: Trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep your information confidential.
                            </li>
                            <li>
                                Legal Compliance: When we believe disclosure is necessary to comply with the law, enforce our site policies, protect our rights, property, or safety, or that of others.
                            </li>
                        </ul>
                        <p>We may share non-personally identifiable information, such as aggregated statistics or anonymized data, with third parties for various purposes, including marketing and advertising.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">4. Children’s Privacy</h2>
                        <p className="mb-3">
                            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information. Individuals aged 16 or older may consent to the processing of their personal data in their country. In some countries, parents or guardians may do so on behalf of children.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
                        <p className="mb-3">Our website uses cookies to enhance user experience and collect information about site usage</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                Cookies: Small files stored on your device that allow us to recognize your browser and capture information. Cookies help us remember your preferences, optimize website performance, and analyze site traffic.
                            </li>
                            <li>
                                Third-Party Tracking: We may partner with third-party service providers who use cookies and other technologies to help us better understand user behavior. These service providers are only permitted to use your information for the purposes we specify and are obligated to keep it confidential.
                            </li>
                        </ul>
                        <p>You can control cookie preferences through your browser settings; however, disabling cookies may affect your experience on our website.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">6. Legal Disclosure</h2>
                        <p className="mb-3">We may disclose your information if required by law or in response to valid legal processes, such as a subpoena, court order, or government request. In the event of a business transition, such as a merger, acquisition, or asset sale, your information may be transferred to the new owner.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">7. Changes to This Policy</h2>
                        <p className="mb-3">We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. We will notify you of any significant changes by updating the date at the top of this page. Your continued use of our website following any changes constitutes your acceptance of the revised policy.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">8. Acceptance of This Policy</h2>
                        <p className="mb-3">By using our website or services, you confirm that you have read, understood, and agree to this Privacy Policy. If you do not agree to the terms outlined in this policy, please refrain from using our website.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">9. Contact Us</h2>
                        <p className="mb-3">
                            If you have any questions about this Privacy Policy or our practices, please reach out to us at:  <Link href={`tel:${siteConfig.contact.email}`} className="text-primary-hover">
                             {siteConfig.contact.email}
                            </Link>
                        </p>
                    </section>
                </div>
            </ScrollArea>
        </>
    );
}

export default Privacy;