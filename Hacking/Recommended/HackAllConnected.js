//Purpose: Hack all servers connected to this one
//Arguments: None
//RAM Usage: 2.80 GB

export async function main(ns) {
  var listOfServers = ns.scan();

  listOfServers.forEach(function (server) {
    ns.run("BreakIn_And_Hack.js", 1, server);
  });
}
