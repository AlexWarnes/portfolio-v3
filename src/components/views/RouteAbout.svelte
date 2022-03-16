<script>
  import { Link, Icon } from "carbon-components-svelte";
  import PageHeader from "../PageHeader.svelte";
  import Launch16 from "carbon-icons-svelte/lib/Launch16";
  import SocialMedia from "../SocialMedia.svelte";
</script>

<PageHeader
  title="Hi, I'm Alex"
  subtitle="Web developer since 2018, former intelligence analyst, amateur photographer, nonproliferation policy nerd, and serial hobbyist. I’m always learning and love telling dad jokes."
  backgroundImgURL="https://github.com/AlexWarnes/Portfolio/blob/master/assets/olympicTrail.jpg?raw=true"
>
  <div class="social-media-wrapper">
    <SocialMedia />
  </div>
</PageHeader>

<section>
  <h2>From Intelligence Analyst to Developer</h2>
  <p>
    After several years as an intelligence analyst, and feeling a bit like my
    career trajectory was not aligned with my interests and goals, I decided to
    start building a new set of skills to make a change.
  </p>
  <p>
    Unsure where to start, I tried everything I was interested in. I studied
    computer networking, restored old furniture, built a quadcopter (only
    started one electrical fire!), took a couple Udemy courses to build games in
    C# and C++, developed a passion for astrophotography, and joined the ranks
    of thousands of Coursera dropouts. Through this process I learned I wanted
    to land in a field where I could be creative, where I could build things,
    and where I could do something technical. I didn't want to incur the
    financial and time-consuming debt of going back to university.
  </p>
  <p>
    After a few free HTML, CSS, and JavaScript courses I enrolled in Thinkful's
    full-stack development program to build some foundational knowledge. For me,
    web development became an engaging cycle of designing, learning,
    programming, and creative problem-solving. I was hooked.
  </p>
  <p>
    In early 2019, Booz Allen hired me into a developer role and I said farewell
    to my career as an analyst. Since then I've had the opportunity to work with
    and learn from some amazing people while building and maintaining
    enterprise-scale Angular and React applications (and grew an obsession with
    composing RxJS streams).
  </p>
  <p>
    These days, when I’m not trying to make my daughter laugh (toddlers are the
    best audience), I’m looking for new things to learn and build. For examples
    of my development work and photography, check out my <Link
      href="/#/development">portfolio</Link
    > and <Link
      href="https://www.instagram.com/alexwarnesphotos/"
      target="_blank">Instagram<Icon render={Launch16} /></Link
    >, or connect with me on <Link
      href="https://www.linkedin.com/in/alexwarnes/"
      target="_blank">LinkedIn<Icon render={Launch16} /></Link
    >.
  </p>
</section>

<style>
  section {
    width: 100%;
    max-width: 640px;
    padding: 24px;
    margin: 0 auto;
  }

  h2 {
    margin: 48px 0 36px;
  }

  p {
    margin: 0 0 1em;
  }

  .social-media-wrapper {
    margin-top: 60px;
  }
</style>
