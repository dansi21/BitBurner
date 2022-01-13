//Purpose: Repeatedly weaken server until close to min threshold then trigger FarmHack.js
//Arguments: {1:Target Server}
//RAM Usage: 3.95 GB

/** @param {NS} ns **/
export async function main(ns) {
  var server = ns.args[0];

  while (
    ns.getServerMinSecurityLevel(server) + 0.05 <=
    ns.getServerSecurityLevel(server)
  ) {
    await ns.weaken(server);
  }

  ns.spawn("FarmHack.js", 1, server);
}
