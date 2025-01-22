import { ScrollArea } from "@/components/ui/scroll-area";
import HeadingOne from "../common/custom-ui/HeadingOne";

const Terms = () => {
    return (
        <>
            <HeadingOne title='Terms and Conditions' />
            <ScrollArea className="max-h-full overflow-y-auto">
                <div className="space-y-4">
                    <section className="mt-2">
                        <p className="mb-3"> <strong> Effective Date: 22 Jan 2025</strong> </p>
                        <p className="mb-3">
                            Welcome to Talentzix.ai! By accessing or using our AI-based resume-building platform ("Platform"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Platform.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
                        <ul className="pl-2 space-y-2">
                            <li>
                                By accessing or using Talentzix.ai, you acknowledge that you have read, 
                                understood, and agree to these Terms and our Privacy Policy.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">2. Services Provided</h2>
                        <p>
                        Talentzix.ai offers AI-powered tools to help users create professional resumes. While we strive for accuracy, 
                        the Platform’s recommendations and suggestions are provided for informational purposes only and should not be considered as guaranteed advice.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">3. User Responsibilities</h2>
                        <ul className="pl-2 space-y-2">
                            <li>
                                <strong> Account Registration: </strong> You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials.
                            </li>
                            <li>
                                <strong> Accurate Information: </strong> You agree to provide accurate, current, and complete information when using the Platform.
                            </li>
                            <li>
                                <strong> Prohibited Activities: </strong> You agree not to misuse the Platform, including but not limited to:
                                <ul className="pl-2 space-y-2">
                                    <li>
                                        Reverse-engineering or modifying the Platform.
                                    </li>
                                    <li>
                                        Using the Platform for illegal purposes.
                                    </li>
                                    <li>
                                        Uploading harmful or malicious content.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">4. Payment and Subscription</h2>
                        <ul className="pl-2 space-y-2">
                            <li>All content, tools, and technologies provided by Talentzix.ai are protected by intellectual property laws.</li>
                            <li>You may use the Platform’s tools to create personal resumes, but you may not copy, distribute, or exploit any part of the Platform’s proprietary systems.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">5. Intellectual Property</h2>
                        <ul className="pl-2 space-y-2">
                            <li>All content, tools, and technologies provided by Talentzix.ai are protected by intellectual property laws.</li>
                            <li>You may use the Platform’s tools to create personal resumes, but you may not copy, distribute, or exploit any part of the Platform’s proprietary systems.</li>
                        </ul>
                    </section>
                    <section>
                    <h2 className="text-lg font-semibold mb-2">6. Limitation of Liability</h2>
                        <ul className="pl-2 space-y-2">
                            <li>Talentzix.ai does not guarantee job placement or career advancement.</li>
                            <li>To the fullest extent permitted by law, Talentzix.ai is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Platform.</li>
                        </ul>
                    </section>
                    <section>
                    <h2 className="text-lg font-semibold mb-2">7. User-Generated Content</h2>
                        <ul className="pl-2 space-y-2">
                            <li>You retain ownership of any content you upload or create using the Platform.</li>
                            <li>By uploading content, you grant Talentzix.ai a non-exclusive, royalty-free, worldwide license to use, reproduce, and display the content for operational purposes.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">8. Third-Party Links</h2>
                        <p>The Platform may include links to third-party websites. Talentzix.ai is not responsible for the content or practices of these websites.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">9. Termination</h2>
                        <ul className="pl-2 space-y-2">
                            <li>Talentzix.ai reserves the right to suspend or terminate your account if you violate these Terms.</li>
                            <li>You may delete your account at any time by contacting customer support or using the account management tools.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">10. Changes to Terms</h2>
                        <p>We may update these Terms from time to time. Any changes will be effective upon posting on the Platform. Continued use of the Platform after updates constitutes acceptance of the revised Terms.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">11. Governing Law</h2>
                        <p>These Terms are governed by the laws of Karnataka, without regard to its conflict of law principles.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">12. Contact Us</h2>
                        <p>
                            For questions or concerns about these Terms, please contact us at: <strong> Talentzix.ai Support Team </strong> at Email: <a href="mailto:support@talentzix.ai">support@talentzix.ai</a>
                        </p>
                    </section>
                    <section>
                        <p>By using Talentzix.ai, you agree to these Terms and Conditions. Thank you for choosing our Platform to create your professional resumes!</p>
                    </section>
                </div>
            </ScrollArea>
        </>
    );
}

export default Terms;