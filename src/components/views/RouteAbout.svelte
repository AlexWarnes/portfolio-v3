<script>
  import PageHeader from "../PageHeader.svelte";
</script>

<PageHeader
  title="Hi, I'm Alex"
  subtitle="Web developer since 2018, former intelligence analyst, amateur photographer, nonproliferation policy nerd, and serial hobbyist. I’m always learning and love telling dad jokes!"
  backgroundImgURL="https://github.com/AlexWarnes/Portfolio/blob/master/assets/olympicTrail.jpg?raw=true"
/>

<section>
  <h2>Career Transition from Analyst to Developer</h2>
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
    of thousands of Coursera dropouts. I learned a lot, failed frequently, and
    succeeded in some ways I didn't expect.
  </p>
  <h3>Combined Interests: Design, Build, Be Useful</h3>
  <p>
    Through this process, and with the support of my wife (who enrolled me in a
    soldering class - no more electrical fires!) I learned that I wanted to land
    in a field where I could be creative, where I could build things, and where
    I could "code" (undefined at the time). I didn't want to incur the financial
    and time-consuming debt of going back to university, and one day my wife
    asked "Why don't you do a coding bootcamp?"
  </p>
  <h3>Web Development is Endless Learning (that’s a good thing)</h3>
  <p>
    I immediately took to web development, and after a few free courses I
    enrolled in Thinkful's Full-Stack Flex program to build some foundational
    knowledge. Web development, particularly frontend, is an engaging
    combination of things that motivate me:
  </p>
  <ul class="motivation-list">
    <li>
      <h4>Learning</h4>
      <p>
        No one finishes a bootcamp and comes out an expert, but even experts
        have more to learn. A lot can be gleaned from how a person learns as
        opposed to how much they know. And I love that in this field I will
        always be able to learn something new.
      </p>
    </li>
    <li>
      <h4>Programming</h4>
      <p>
        Logic, problem solving, algorithms, state management, functional,
        object-oriented, imperative... The technical part of my brain enjoys
        both the simple and complex aspects of web development. It's what I used
        to think of as just "coding." You know, nerd stuff.
      </p>
    </li>
    <li>
      <h4>Creativity</h4>
      <p>
        Photography and post-processing techniques taught me a lot about
        composition, color, and creative design generally. Much of this applies
        to web design as well (who knew there were so many fonts?). I'm always
        looking forward to the process of turning wireframes into fully designed
        pages, or finding the best combination of offset, blur, and opacity for
        the perfect button:hover shadow transitions.
      </p>
    </li>
  </ul>
  <h3>New Career</h3>
  <p>
    In early 2019, Booz Allen hired me into a developer role and I said farewell
    to my career as an analyst. Since then I've had the opportunity to work with
    and learn from some amazing people while building and maintaining
    enterprise-scale Angular and React applications (and grew an obsession with
    composing RxJS streams).
  </p>
  <p>Now I'm always excited to see what I get to learn and work on next.</p>
</section>

<style>
  section {
    width: 100%;
    max-width: 640px;
    padding: 24px;
    margin: 0 auto;
  }

  .motivation-list {
    padding: 0 0 0 16px;
  }

  h2 {
    margin: 48px 0 36px;
  }

  h3 {
    margin: 24px 0 16px;
  }

  h4 {
    margin: 16px 0 8px;
  }

  p {
    margin: 0 0 1em;
  }
</style>
