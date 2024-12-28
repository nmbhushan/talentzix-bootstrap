import { ScrollArea } from "@/components/ui/scroll-area";
import HeadingOne from "../common/custom-ui/HeadingOne";

const Terms = () => {
    return (
        <>
            <HeadingOne title='Terms and Conditions' />
            <ScrollArea className="max-h-full overflow-y-auto">
                <div className="space-y-4">
                    <section className="mt-2">
                        <p className="mb-3">Thank you for selecting the Services offered by Exalogic Consulting Pvt. Ltd. and/or its subsidiaries and affiliates (referred to as "Real Cube," "we," "our," or "us"). These services are provided to you through this website and/or our mobile applications, including content, updates, and new releases (collectively referred to as the "Services").  </p>
                        <p>Please review these Terms of Service ("Agreement") thoroughly. By accepting electronically (for example, by clicking "I Agree" or "Login"), installing, accessing, or using the Services, you agree to comply with and be bound by these terms. If you do not agree to this Agreement, you may not use the Services.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">1. Agreement Overview</h2>
                        <ul className="pl-2 space-y-2">
                            <li>
                                1.1 The Real Cube Privacy Policy, which is accessible via the Services available on the website or provided to you otherwise.</li>
                            <li>1.2 Any terms provided separately to you for the Services, including product or program terms, ordering, activation, and payment terms.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">2. Disclaimer of Advice</h2>
                        <p>The contents of Real Cube Services do not constitute professional advice and should not be relied upon when making or refraining from making any decision.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">3. Changes to Use</h2>
                        <p className="mb-3">Real Cube reserves the right to:</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                3.1 Change or remove (temporarily or permanently) the website or any part of it without notice. You acknowledge and agree that Real Cube shall not be liable to you for any such changes or removals.</li>
                            <li>
                                3.2 Modify these Terms and Conditions at any time. Your continued use of the Services following any changes shall be deemed your acceptance of such changes.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">4. Third-Party Links</h2>
                        <p className="mb-3">Real Cube Services may include links to third-party websites that are controlled and maintained by others. Any link to other websites does not constitute an endorsement of those websites, and you acknowledge and agree that we are not responsible for the content or availability of any such sites.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">5. No Resale of Service</h2>
                        <p className="mb-3">You agree not to reproduce, duplicate, copy, sell, resell, or exploit for any commercial purposes any portion of the Service, its use, or access to the Service. Real Cube reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with reasonable notice, allowing you to retain the information assets created by you on Real Cube. After the notice period, you agree that Real Cube shall not be liable to you or any third party.</p>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold mb-2">6. Content Responsibility</h2>
                        <p className="mb-3">You are solely responsible for all materials ("Content") uploaded, posted, or stored through your use of the Services. By providing Content through the Services, you grant Real Cube a worldwide, royalty-free, non-exclusive license to host and use that Content for the purpose of delivering the Services.</p>
                        <p className="mb-3">Real Cube is not responsible for the Content or data you submit through the Services. You agree not to use, nor permit any third party to use, the Services to upload, post, distribute, link to, publish, reproduce, engage in, or transmit any of the following:</p>
                        <ul className="pl-2 space-y-2">
                            <li>
                                6.1 Illegal, fraudulent, defamatory, obscene, pornographic, profane, threatening, abusive, hateful, harassing, offensive, inappropriate, or objectionable information or communications of any kind, including conduct that would encourage "flaming" others, or that may incur criminal or civil liability under any law.</li>
                            <li>
                                6.2 Content that impersonates someone else or falsely represents your identity or qualifications, or that constitutes a breach of any individual's privacy.
                            </li>
                            <li>
                            6.3 Investment opportunities, solicitations, chain letters, pyramid schemes, or other unsolicited commercial communications, or engage in spamming or flooding, unless permitted in writing by Real Cube.
                            </li>
                            <li>
                            6.4 Any virus, trojan horse, worm, or other disruptive or harmful software or data.
                            </li>
                            <li>
                            6.5 Any information, software, or Content that you do not own or have explicit permission to use from the copyright or intellectual property rights owner.
                            </li>
                        </ul>
                    </section>
                </div>
            </ScrollArea>
        </>
    );
}

export default Terms;