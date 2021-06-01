import React from "react";
import "../../styles.css";
import { BrowserView, MobileView } from "react-device-detect";

export default function About() {
    
    return (
        <div style={{ backgroundColor: "#F8F8F8" }}>
            <BrowserView>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "7%"
                        }}
                    >
                        <h5>About us</h5>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "left",
                                alignItems: "left"
                            }}
                        >
                            <p>Welcome to Intelligent Symptomate, your number one source for all things [product].
                            We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1],
                            [store characteristic 2], [store characteristic 3].Founded in [year] by [founder name], Intelligent
                            Symptomate has come a long way from its beginnings in [starting location]. When [founder name] first
                            started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"]drove
                            them to start their own business.We hope you enjoy our products as much as we enjoy offering them to
                            you. If you have any questions or comments, please don't hesitate to contact us.

                            Sincerely,
                            [founder name]
</p>

                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div
                    style={{
                        paddingTop: "5%",
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "7%",
                            alignItems: "center"
                        }}
                    >
                        <h5>About us</h5>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "5%",

                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <p>Welcome to Intelligent Symptomate, your number one source for all things [product].
                            We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1],
                            [store characteristic 2], [store characteristic 3].Founded in [year] by [founder name], Intelligent
                            Symptomate has come a long way from its beginnings in [starting location]. When [founder name] first
                            started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"]drove
                            them to start their own business.We hope you enjoy our products as much as we enjoy offering them to
                            you. If you have any questions or comments, please don't hesitate to contact us.

                            Sincerely,
                            [founder name]
</p>
                        </div>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
