const publications = [
  { year: '2026', venue: 'arXiv preprint',
    title: 'Transformers Provably Implement In-Context Reinforcement Learning with Policy Improvement',
    authors: ['Haodong Liang', 'Lifeng Lai'],
    url: 'https://arxiv.org/abs/2605.05755' },
  { year: '2026', venue: 'ICLR 2026',
    title: 'Differentially Private Two-Stage Gradient Descent for Instrumental Variable Regression',
    authors: ['Haodong Liang', 'Yanhao Jin', 'Krishnakumar Balasubramanian', 'Lifeng Lai'],
    url: 'https://arxiv.org/abs/2509.22794' },
  { year: '2025', venue: 'ICLR 2025',
    title: 'Transformers Handle Endogeneity in In-Context Linear Regression',
    authors: ['Haodong Liang', 'Krishnakumar Balasubramanian', 'Lifeng Lai'],
    url: 'https://arxiv.org/abs/2410.01265' },
  { year: '2023', venue: 'Nature Communications',
    title: 'ASGARD is A Single-cell Guided Pipeline to Aid Repurposing of Drugs',
    authors: ['Bing He', 'Yao Xiao', 'Haodong Liang', 'Qianhui Huang', 'Yuheng Du', 'Yijun Li', 'David Garmire', 'Duxin Sun', 'Lana X. Garmire'],
    url: 'https://www.nature.com/articles/s41467-023-36637-3' },
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function ResearchIllustration({ src, alt, caption, children }: { src: string; alt: string; caption: string; children?: React.ReactNode }) {
  return (
    <figure className="research-illustration">
      <div className="research-visual">
        <img className="research-diagram" src={src} alt={alt} width={360} height={240} loading="lazy" decoding="async" />
        {children}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#about" aria-label="Haodong Liang, home">HL<span>.</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a><a href="#research">Research</a>
            <a href="#publications">Publications</a><a href="#background">Background</a>
          </nav>
          <a className="header-cv" href="/Haodong-Liang-CV.pdf" target="_blank" rel="noopener noreferrer">CV <Arrow /></a>
        </div>
      </header>
      <main id="main" className="page-shell">
        <section id="about" className="intro" aria-labelledby="name">
          <div className="identity">
            <div className="identity-heading">
              <div className="portrait">
                <img src="/haodong-liang-portrait.png" alt="Haodong Liang at the beach" width={1448} height={1086} decoding="async" fetchPriority="high" />
              </div>
              <div className="identity-text">
                <h1 id="name">Haodong<br />Liang<span className="name-period">.</span></h1>
                <p className="role">Ph.D. Candidate<br />Electrical &amp; Computer Engineering</p>
                <p className="location">3174 Kemper Hall<br />Davis, California</p>
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:hdliang@ucdavis.edu">Email <Arrow /></a>
              <a href="https://scholar.google.com/citations?user=JcLatcIAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <Arrow /></a>
              <a href="https://www.linkedin.com/in/haodong-liang-0b852121b/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
              <a href="/Haodong-Liang-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="biography">
            <h2 className="about-heading">About me</h2>
            <p className="bio-lead">Welcome to my homepage! I am a Ph.D. candidate at UC Davis, advised by Professors <a className="person-name" href="https://faculty.engineering.ucdavis.edu/lai/" target="_blank" rel="noopener noreferrer">Lifeng Lai</a> and <a className="person-name" href="https://sites.google.com/view/kriznakumar/home" target="_blank" rel="noopener noreferrer">Krishnakumar Balasubramanian</a>.</p>
            <p>I study the theoretical and mechanistic foundations of in-context learning. My research combines theoretical analysis with empirical investigation to understand how Transformers learn and execute algorithms in context.</p>
            <p>I am also interested in reinforcement learning, continual learning, and differential privacy.</p>
          </div>
        </section>
        <aside className="opportunity" aria-label="Work interests">
          <div className="opportunity-label"><span className="status-dot" /> Open to work</div>
          <p>I am actively looking for research internship opportunities for Summer 2027.</p>
          <a href="mailto:hdliang@ucdavis.edu">Get in touch <Arrow /></a>
        </aside>
        <section id="research" className="section" aria-labelledby="research-heading">
          <div className="section-heading"><p className="section-index">01</p><h2 id="research-heading">Research</h2></div>
          <div className="research-grid">
            <article className="research-item">
              <h3>In-context learning</h3>
              <ResearchIllustration src="/icl-concept-paper.svg" alt="The context contains apple → fruit and bird → animal. Given the query carrot → ?, a Transformer predicts vegetable without updating its parameters. An illustrative in-context classification task." caption="Learn from context, without parameter updates.">
                <img className="icl-spot icl-spot-apple" src="/illustrations/icl-apple.png" alt="" aria-hidden="true" width={72} height={72} loading="lazy" decoding="async" />
                <img className="icl-spot icl-spot-bird" src="/illustrations/icl-bird.png" alt="" aria-hidden="true" width={72} height={72} loading="lazy" decoding="async" />
                <img className="icl-spot icl-spot-carrot" src="/illustrations/icl-carrot.png" alt="" aria-hidden="true" width={72} height={72} loading="lazy" decoding="async" />
              </ResearchIllustration>
              <p>In-context learning refers to a pretrained model’s ability to learn from contextual information and adapt to new tasks at inference time. We study the theoretical foundations of Transformers’ in-context learning ability in linear regression and reinforcement learning. For in-context linear regression, our work establishes that Transformers can address endogeneity using instrumental variables. For in-context reinforcement learning, we investigate how Transformers can act as agents and implement policy-improvement algorithms through closed-loop interaction with the environment.</p>
              <a className="text-link" href="#publications">Related publications <span aria-hidden="true">↓</span></a>
            </article>
            <article className="research-item">
              <h3>Differential privacy</h3>
              <ResearchIllustration src="/privacy-concept-paper.svg" alt="Datasets D and D prime differ only in one highlighted record, labeled a and b. Both are processed separately by the same randomized algorithm M. Solid and dashed curves illustrate nearby output distributions under a privacy guarantee, not experimental results." caption="Changing one record has a limited effect on the output distribution." />
              <p>Differential privacy provides formal guarantees that limit how much an individual’s data can influence an algorithm’s output. We address endogeneity under privacy constraints by developing a noisy two-stage gradient descent algorithm with zero-concentrated differential privacy guarantees and finite-sample convergence rates.</p>
              <a className="text-link" href="https://arxiv.org/abs/2509.22794" target="_blank" rel="noopener noreferrer">Read the paper <Arrow /></a>
            </article>
          </div>
        </section>
        <section id="publications" className="section" aria-labelledby="publications-heading">
          <div className="section-heading"><p className="section-index">02</p><h2 id="publications-heading">Selected publications</h2><span className="section-note">Most recent first</span></div>
          <div className="publication-list">
            {publications.map((paper) => (
              <article key={paper.url} className="publication">
                <div className="publication-year">{paper.year}</div>
                <div className="publication-content">
                  <p className="venue">{paper.venue}</p>
                  <h3><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3>
                  <p className="authors">{paper.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{author === 'Haodong Liang' ? <strong>{author}</strong> : author}</span>)}</p>
                  <div className="paper-links">
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${paper.title}`}>Paper <Arrow /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="background" className="section" aria-labelledby="background-heading">
          <div className="section-heading"><p className="section-index">03</p><h2 id="background-heading">Background</h2></div>
          <div className="background-grid">
            <div>
              <h3 className="small-heading">Education</h3>
              <div className="education-item"><p className="date-label">2023–2028 (expected)</p><h4>University of California, Davis</h4><p>Ph.D., Electrical &amp; Computer Engineering</p></div>
              <div className="education-item"><p className="date-label">2021–2023</p><h4>University of Michigan, Ann Arbor</h4><p>M.Sc., Statistics</p></div>
              <div className="education-item"><p className="date-label">2016–2020</p><h4>Xiamen University</h4><p>B.Sc., Mathematical Statistics</p></div>
            </div>
            <div>
              <h3 className="small-heading">Academic service</h3>
              <div className="service-item"><h4>Reviewer</h4><p>ICLR (2026, 2027)<br />NeurIPS (2026)<br />IEEE Transactions on Information Theory</p></div>
              <div className="service-item"><h4>Teaching Assistant</h4><p>EEC 266 Information Theory and Coding (Fall 2025)<br />EEC 018 Digital System Design (Spring 2025)<br />EEC 161 Applied Probability (Spring 2024)</p></div>
              <h3 className="small-heading awards-heading">Selected honors</h3>
              <ul className="honors"><li><span>2026</span>Shu Lin Graduate Student Conference Travel Award</li><li><span>2025</span>Summer Graduate Student Researcher Award</li><li><span>2023</span>University Graduate Program Fellowship</li></ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
