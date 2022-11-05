<template>
  <f7-page name="form">
    <f7-navbar
      title="Regeln"
      back-link="Back"
    />
    <f7-block-title>0</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>s, z, ß, ss, c (weich)</div>
      <div class="mnemonic">
        Merkhilfe: vgl. englisch zero
      </div>
    </f7-block>

    <f7-block-title>1</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>t, d, th</div>
      <div class="mnemonic">
        Merkhilfe: t könnte man mit einer 1 verwechseln, d ist lautverwandt. d und t haben einen Abstrich (Linie nach unten)
      </div>
    </f7-block>

    <f7-block-title>2</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>n</div>
      <div class="mnemonic">
        Merkhilfe: n hat zwei Beine
      </div>
    </f7-block>

    <f7-block-title>3</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>m</div>
      <div class="mnemonic">
        Merkhilfe: m hat drei Beine
      </div>
    </f7-block>

    <f7-block-title>4</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>r</div>
      <div class="mnemonic">
        Merkhilfe: vier endet mit r
      </div>
    </f7-block>

    <f7-block-title>5</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>l</div>
      <div class="mnemonic">
        Merkhilfe: L erinnert an die römische Ziffer 50. L = Hand mit abgespreizten Daumen = 5 Finger
      </div>
    </f7-block>

    <f7-block-title>6</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>ch, j, sch, g (weich)</div>
      <div class="mnemonic">
        Merkhilfe: j wie Dschungel. g als gedrehte 6
      </div>
    </f7-block>

    <f7-block-title>7</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>k, ck, g (hart), c (hart)</div>
      <div class="mnemonic">
        Merkhilfe: 7 ist eine Glückszahl. K setzt sich aus zwei 7 zusammen
      </div>
    </f7-block>

    <f7-block-title>8</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>f, v, w, ph</div>
      <div class="mnemonic">
        Merkhilfe: V8-Motor bei VW. das handschriftliche f hat genau wie 8 zwei Schleifen
      </div>
    </f7-block>

    <f7-block-title>9</f7-block-title>
    <f7-block
      strong
      inset
    >
      <div>p, b</div>
      <div class="mnemonic">
        Merkhilfe: 9 ist ein gespiegeltes p oder gedrehtes b (beide sind lautverwandt)
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'SystemRulesPage',

  props: {},
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.mnemonic {
  margin-top: 20px;
}
</style>
