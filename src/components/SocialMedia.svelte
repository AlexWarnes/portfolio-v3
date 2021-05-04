<script lang="ts">
  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
  import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
  import LogoInstagram24 from "carbon-icons-svelte/lib/LogoInstagram24";
  import Email24 from "carbon-icons-svelte/lib/Email24";
  import LogoLinkedin24 from "carbon-icons-svelte/lib/LogoLinkedin24";
  import { Button } from "carbon-components-svelte";
  export let rowStyles: string = "";
</script>

<div class="social-row" style={rowStyles}>
  <Button
    kind="tertiary"
    href="mailto:alex.s.warnes@gmail.com"
    tooltipPosition="bottom"
    tooltipAlignment="center"
    iconDescription="Email"
    disabled={false}
    icon={Email24}
  />
  <Button
    kind="tertiary"
    href="https://github.com/AlexWarnes/"
    tooltipPosition="bottom"
    tooltipAlignment="center"
    iconDescription="GitHub"
    disabled={false}
    icon={LogoGithub24}
  />
  <Button
    kind="tertiary"
    href="https://www.instagram.com/alexwarnesphotos/"
    tooltipPosition="bottom"
    tooltipAlignment="center"
    iconDescription="Instagram"
    disabled={false}
    icon={LogoInstagram24}
  />
  <Button
    kind="tertiary"
    href="https://twitter.com/a_warnes"
    tooltipPosition="bottom"
    tooltipAlignment="center"
    iconDescription="Twitter"
    disabled={false}
    icon={LogoTwitter24}
  />
  <Button
    kind="tertiary"
    href="https://www.linkedin.com/in/alexwarnes/"
    tooltipPosition="bottom"
    tooltipAlignment="center"
    iconDescription="Twitter"
    disabled={false}
    icon={LogoLinkedin24}
  />
</div>

<style>
  .social-row
    :global(.bx--btn.bx--btn--icon-only.bx--tooltip__trigger[disabled]:hover) {
    cursor: pointer;
  }

  .social-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 275px;
  }
</style>
