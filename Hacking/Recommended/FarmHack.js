//Purpose: Will repeatedly hack target server and keep its security level.
//Arguments: {1:Target Server}
//RAM Usage: 2.10 GB

/** @param {NS} ns **/
export async function main(ns) {
  var server = ns.args[0];

  var initialMax = ns.getServerMoneyAvailable(server);

  var growthCount = 0;

  while (true) {
    if (ns.getServerMoneyAvailable(server) < 0.9 * initialMax) {
      await ns.grow(server);
      growthCount += 0.004;

      if (growthCount >= 0.05) {
        await ns.weaken(server);
        growthCount -= 0.05;
      }
    } else {
      await ns.hack(server);
      growthCount += 0.002;
    }
  }
}
