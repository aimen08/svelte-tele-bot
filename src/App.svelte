<script>
  import Logo from './assets/logo.png'
  import Counter from './lib/Counter.svelte'
    let md;
  	const initializeTelegram = () => {
		md = window.Telegram.WebApp.initData ;
    console.log(md);
	}
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js?1" on:load={initializeTelegram}></script>
</svelte:head>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={Logo} class="logo" alt="false" />
    </a>

  </div>
  <h2>تلغرام بوت لشراء المتابعة</h2>


</main>

<style>
  .logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #02aa64aa);
  }
</style>
