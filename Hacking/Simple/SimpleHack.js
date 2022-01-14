//Purpose: Repeatedly hack target server
//Arguments: {1:Target Server}
//RAM Usage: 1.70 GB

export async function main(ns) {
  while (true) {
    await ns.hack(ns.args[0]);
  }
}
