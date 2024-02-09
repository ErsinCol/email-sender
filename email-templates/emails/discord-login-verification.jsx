import {Body, Container, Head, Html, Preview, Section, Img, Heading, Font, Text, Button, Hr} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";

export default function DiscordLoginVerification(){
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Helvatica"
                    fallbackFontFamily="sans-serif"
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Yeni konumdan discord girişini doğrula</Preview>
            <Tailwind>
                <Body className="bg-[#f9f9f9]">
                    <Container>
                        <Section className="text-center py-10">
                            <Img
                                src="https://ci3.googleusercontent.com/meips/ADKq_Nb5ax2Dw95owSyduMse6gWIZx_i1EsIfAvUeqb5rU5YhlXMLMEF5TYL8ATNnfQWN2dfeUixF4dVM-Zzau2o464U42jc-z3wuxkkcAGDHa-7iiaImXcT5Z3Lp4a5k2ozTo8a=s0-d-e1-ft#https://cdn.discordapp.com/email_assets/592423b8aedd155170617c9ae736e6e7.png"
                                alt="Discord"
                                width="138"
                                height="38"
                                className="inline"
                            />
                        </Section>

                        <Section className="py-10 px-12 bg-white border-[#808080]">
                            <Heading as="h2" className="text-[#4f545c] font-medium text-xl">Selam iam.ersin,</Heading>
                            <Text className="my-3 text-[#747f8d] leading-6 text-left text-base">Birisi Discord hesabına
                                farklı bir konumdan giriş yapmayı denedi. Eğer bunu sen yaptıysan aşağıdaki bağlantıyı
                                takip edip hesabına bu konumdan giriş yapılmasını onayla.</Text>
                            <Text className="my-3 text-[#747f8d] leading-6 text-left text-base">
                                <strong>IP Adresi:</strong> 000<span>.</span>000<span>.</span>000<span>.</span>000<br/>
                                <strong>Konum:</strong> Istanbul, Türkiye
                            </Text>
                            <Text className="my-3 text-[#747f8d] leading-6 text-left text-base ">
                                Bu işlemden haberin yoksa buraya tıklayarak {" "}
                                <strong>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-[#5865f2] no-underline"
                                    >
                                        şifreni sıfırla ve tüm cihazlarda oturumu kapat.
                                    </a>
                                </strong>
                            </Text>
                            <div className="pt-5 px-6 pb-2.5 text-center">
                                <Button className="bg-[#5865f2] text-white rounded py-4 px-5 border-0 cursor-pointer inline">
                                    Girişi Doğrula
                                </Button>
                            </div>
                            <div className="py-6">
                                <Hr />
                            </div>
                            <Text className="my-3 text-[#747f8d] leading-4 text-left text-xs">
                                Yardım mı lazım? {" "}
                                <Button
                                    href="#"
                                    className="text-[#5865f2]"
                                    target="_blank"
                                >
                                    Destek
                                    ekibiyle görüş
                                </Button>
                                {" "} veya Twitter {" "}
                                <Button
                                    href="#"
                                    className="text-[#5865f2]"
                                    target="_blank"
                                >
                                    @discord
                                </Button>
                                {" "}adresinden bizi dürt.
                                <br/>
                                Geri bildirim göndermek mi istiyorsun? {" "}
                                <Button
                                    href="#"
                                    className="text-[#5865f2]"
                                    target="_blank"
                                >
                                    Geri bildirim sitemizden
                                </Button>
                                {" "} bizimle düşüncelerini paylaş.
                            </Text>
                        </Section>

                        <Section className="py-5">
                            <Text className="text-[#99aab5] text-xs leading-6 text-center m-0">
                                Discord tarafından gönderildi <span>• </span>
                                <Button
                                    href="#"
                                    target="_blank"
                                    className="text-[#1eb0f4] no-underline"
                                >
                                    Bloğumuza göz at
                                </Button>
                                <span> • </span>
                                <Button
                                    href="#"
                                    target="_blank"
                                    className="text-[#1eb0f4] no-underline"
                                >
                                    @discord
                                </Button>
                            </Text>
                            <Text className="text-[#99aab5] text-xs leading-6 text-center m-0">
                                444 De Haro Street, Suite 200, San Francisco, CA 94107
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}