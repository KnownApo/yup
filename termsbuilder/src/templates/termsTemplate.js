const termsTemplate = `
<h2>Terms of Service</h2>
<p>Welcome to <strong>{{businessName}}</strong>. These terms govern your use of our service.</p>

<h3>Acceptance</h3>
<p>By using our site, you agree to these terms and our Privacy Policy.</p>

<h3>Use of Data</h3>
<p>We collect: 
<ul>
  {{#each dataCollected}}
    <li>{{this}}</li>
  {{/each}}
</ul>
</p>

<h3>Cookies</h3>
<p>Cookies are {{#if usesCookies}}enabled{{else}}disabled{{/if}} on this service.</p>

<h3>Governing Law</h3>
<p>These terms are governed by the laws of {{country}}.</p>
`;

export default termsTemplate;
