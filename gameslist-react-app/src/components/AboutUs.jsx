import React from "react";
import { useNavigate } from "react-router";

export default function AboutUs() {

    const navigate = useNavigate();

    return (
        <div className="about-root">
            <style>{`
                /* Shared / reset */
                .about-root { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color: #1f2937; line-height: 1.4; padding: 32px; box-sizing: border-box; background: #171717;}
                .about-container { max-width: 1100px; margin: 0 auto; }

                /* Hero */
                .about-hero { display: flex; gap: 28px; align-items: center; background: linear-gradient(135deg, #ff380bff 0%, #4aa3ff 100%); color: white; padding: 28px; border-radius: 12px; box-shadow: 0 8px 30px rgba(11,114,255,0.18); }
                .about-hero .left { flex: 1; }
                .about-title { font-size: 28px; margin: 0 0 8px; font-weight: 700; letter-spacing: -0.2px; }
                .about-sub { margin: 0 0 16px; opacity: 0.95; text-align: left; }
                .about-cta { display: inline-block; background: #ffcf33; color: #0b2340; padding: 10px 16px; border-radius: 8px; font-weight: 600; text-decoration: none; box-shadow: 0 6px 18px rgba(255,207,51,0.18); }

                .about-hero .right { width: 160px; height: 160px; border-radius: 12px; background: rgba(142, 82, 82, 0.12); display:flex; align-items:center; justify-content:center; font-size:42px; font-weight:700; }

                /* Content */
                .about-sections { display: grid; grid-template-columns: 1fr 360px; gap: 28px; margin-top: 28px; align-items: start;}
                .about-card { background: #f5d3d3ff; padding: 20px; border-radius: 10px; box-shadow: 0 6px 20px rgba(15,23,42,0.06); }
                .about-heading { font-size: 18px; margin: 0 0 12px; font-weight: 700; }
                .about-text { margin: 0 0 12px; color: #374151; }

                /* Values */
                .values { display: flex; gap: 12px; flex-wrap: wrap; }
                .value-pill { background: #f1f5f9; padding: 8px 12px; border-radius: 999px; color: #0b2340; font-weight:600; font-size:13px; }

                /* Team */
                .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px; }
                .member { background: linear-gradient(180deg,#ffffff,#fafafa); border-radius: 10px; padding: 12px; display:flex; gap:12px; align-items:center; box-shadow: 0 4px 12px rgba(15,23,42,0.04); }
                .avatar { width:48px; height:48px; border-radius:50%; background: linear-gradient(135deg,#ffd57a,#ffb199); display:flex; align-items:center; justify-content:center; font-weight:700; color:#081222; }
                .member-info { min-width:0; }
                .member-name { font-weight:700; font-size:14px; margin:0; }
                .member-role { font-size:13px; color:#64748b; margin:0; }

                /* Small aside card */
                .aside-hero { display:flex; gap:12px; align-items:center; padding:14px; border-radius:10px; background: linear-gradient(90deg,#fff8e6,#fffdf7); border:1px solid rgba(255,207,51,0.15); }
                .aside-hero .spark { font-size:22px; }

                /* Responsive */
                @media (max-width: 880px) {
                    .about-sections { grid-template-columns: 1fr; }
                    .team-grid { grid-template-columns: repeat(2, 1fr); }
                    .about-hero { flex-direction: column; text-align:center; }
                    .about-hero .right { width:120px; height:120px; margin: 0 auto; }
                }
                @media (max-width: 520px) {
                    .team-grid { grid-template-columns: 1fr; }
                    .about-root { padding: 18px; }
                    .about-title { font-size:22px; }
                }
            `}</style>

            <div className="about-container">
                <section className="about-hero" aria-labelledby="about-title">
                    <div className="left">
                        <h1 id="about-title" className="about-title">About Us — Heroes behind the UI</h1>
                        <p className="about-sub">We design fast, accessible interfaces and craft delightful experiences for users of every kind. Built with performance and joy in mind.</p>
                        <a className="about-cta" onClick={() => navigate("/")}>Work with us</a>
                    </div>
                    <div className="right" aria-hidden>
                        SH
                    </div>
                </section>

                <div className="about-sections" style={{ marginTop: 24 }}>
                    <main>
                        <article className="about-card" aria-labelledby="mission">
                            <h2 id="mission" className="about-heading">Our mission</h2>
                            <p className="about-text">Create products that empower people. We focus on clarity, performance, and a small set of delightful details — because those are the things users remember.</p>

                            <h3 className="about-heading" style={{ fontSize: 16 }}>What we value</h3>
                            <div className="values" aria-hidden>
                                <span className="value-pill">Speed</span>
                                <span className="value-pill">Accessibility</span>
                                <span className="value-pill">Simplicity</span>
                                <span className="value-pill">Craftsmanship</span>
                                <span className="value-pill">Collaboration</span>
                            </div>

                            <h3 className="about-heading" style={{ marginTop: 16, fontSize: 16 }}>Story</h3>
                            <p className="about-text">Started by a small team with big ideas, we grew by shipping often and listening closely. Today we help teams build interfaces that scale from prototype to production.</p>
                        </article>

                        <article className="about-card" style={{ marginTop: 16 }} aria-labelledby="team-heading">
                            <h2 id="team-heading" className="about-heading">Meet the team</h2>
                            <div className="team-grid" role="list">
                                <div className="member" role="listitem">
                                    <div className="avatar">EN</div>
                                    <div className="member-info">
                                        <p className="member-name">Ernar N.</p>
                                        <p className="member-role">Founder · Frontend</p>
                                    </div>
                                </div>

                                <div className="member" role="listitem">
                                    <div className="avatar" style={{ background: 'linear-gradient(135deg,#a0ffb9,#7ef0ff)' }}>AL</div>
                                    <div className="member-info">
                                        <p className="member-name">Alex L.</p>
                                        <p className="member-role">Design Lead</p>
                                    </div>
                                </div>

                                <div className="member" role="listitem">
                                    <div className="avatar" style={{ background: 'linear-gradient(135deg,#ffd1e0,#ffb3c9)' }}>KM</div>
                                    <div className="member-info">
                                        <p className="member-name">Kim M.</p>
                                        <p className="member-role">Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>

                    <aside>
                        <div className="about-card aside-hero" aria-hidden>
                            <div className="spark">✨</div>
                            <div>
                                <strong style={{ display: "block", fontSize: 15 }}>We ship fast</strong>
                                <small style={{ color: "#475569" }}>Weekly releases, continuous feedback.</small>
                            </div>
                        </div>

                        <div className="about-card" style={{ marginTop: 14 }}>
                            <h3 className="about-heading" style={{ fontSize: 15 }}>Contact</h3>
                            <p className="about-text" style={{ marginBottom: 8 }}>Have a project? Reach out and we’ll find a plan that fits your needs.</p>
                            <a className="about-cta" style={{ display: "inline-block" }}>Get in touch</a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}