<template>
  <RouterView />
</template>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  button {
    padding: 10px 15px;
    background: #0066ff;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
  :root{
    --bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#7c3aed;--glass: rgba(255,255,255,0.03)
  }
  *{box-sizing:border-box}
  form.grid{display:grid;grid-template-columns:1fr 360px;gap:18px}
  @media (max-width:880px){form.grid{grid-template-columns:1fr}}

  label{display:block;font-size:13px;margin-bottom:6px}
  .control{margin-bottom:12px}
  input[type=text],
  input[type=email],
  input[type=password],
  input[type=number],
  input[type=tel],
  input[type=url],
  textarea,
  select,
  datalist,
  input[type=date],
  input[type=time],
  input[type=datetime-local],
  input[type=color],
  input[type=file] {
    width:100%;
    padding:10px 12px;
    border-radius:8px;
    background:var(--glass);
    border:1px solid rgb(127, 127, 127);
    color:inherit;
    font-size:14px
  }
  /* tiny focus styles */
  input:focus, select:focus, textarea:focus{outline:2px solid rgba(124,58,237,0.12);box-shadow:0 0 0 4px rgba(124,58,237,0.06)}
</style>