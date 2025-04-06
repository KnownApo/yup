const privacyTemplate = `
<h2>Privacy Policy</h2>
<p><strong>{{businessName}}</strong> ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect and use personal data.</p>

<h3>Data We Collect</h3>
<ul>
  {{#each dataCollected}}
    <li>{{this}}</li>
  {{/each}}
</ul>

<h3>Cookies</h3>
<p>We {{#if usesCookies}}do{{else}}do not{{/if}} use cookies to enhance user experience.</p>

<h3>Your Rights</h3>
<p>If you are located in {{country}}, you may have specific rights under applicable law.</p>
`;

export default privacyTemplate;
