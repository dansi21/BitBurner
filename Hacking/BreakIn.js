//Purpose: Used to automatically run all EXE present to break into a server. Will result in root access.
//Arguments: {1:Target Server}
//RAM Usage: 2.10 GB

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

  if (numPortNeeded <= 0) {
    ns.nuke(server);
    console.log("Break In Succeeded");
  } else {
    console.log("Not Enough Ports Open - Break In Failed");
  }
}
