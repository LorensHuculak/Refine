<template>
  <div
    class="pt-6"
    id="pills-three-example1"
    role="tabpanel"
    aria-labelledby="pills-three-example1-tab"
  >
    <div>
      Address:
      <a
        :href="'https://rinkeby.etherscan.io/address/' + status.decodedData[0]"
        target="_blank"
      >
        {{ status.decodedData[0] }}
      </a>
    </div>
    <div>Status: {{ status.status }}</div>

    <div>Disputed: {{ status.disputed }}</div>
    <div>Dispute Status: {{ status.disputeStatus }}</div>
    <div>Resolved: {{ status.disputed }}</div>
    <div>
      Requester:
      <a
        :href="'https://rinkeby.etherscan.io/address/' + status.requester"
        target="_blank"
      >
        {{ status.requester }}
      </a>
    </div>
    <div>
      Challenger:
      <a
        :href="'https://rinkeby.etherscan.io/address/' + status.challenger"
        target="_blank"
      >
        {{ status.challenger }}
      </a>
    </div>
    <div>
      Arbitrator:
      <a
        :href="'https://rinkeby.etherscan.io/address/' + status.arbitrator"
        target="_blank"
      >
        {{ status.arbitrator }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["status"],
};
</script>
