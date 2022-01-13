//Purpose: Used to automatically run all EXE present to break into a server. Will result in root access.
//Arguments: {1:Target Server}
//RAM Usage: 4.25 GB

/** @param {NS} ns **/
export async function main(ns) {
  var server = ns.args[0];
  var numPortNeeded = ns.getServerNumPortsRequired(server);

  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(server);
    numPortNeeded--;
  }
  if (ns.fileExists("FTPCrack.exe", "home")) {
    ns.ftpcrack(server);
    numPortNeeded--;
  }
  if (ns.fileExists("relaySTMP.exe", "home")) {
    ns.relaysmtp(server);
    numPortNeeded--;
  }
  if (ns.fileExists("HTTPWorm.exe", "home")) {
    ns.httpworm(server);
    numPortNeeded--;
  }
  if (ns.fileExists("SQLInject.exe", "home")) {
    ns.sqlinject(server);
    numPortNeeded--;
  }

  if (
    numPortNeeded <= 0 &&
    ns.getHackingLevel() > ns.getServerRequiredHackingLevel(server)
  ) {
    ns.nuke(server);
    ns.toast("Break In Succeeded");
  } else {
    ns.toast("Not Enough Ports Open - Break In Failed");
  }

  ns.spawn("FarmHack.js", 1, server);
}
