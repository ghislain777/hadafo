const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(heurefin) => "chaine"
 * addColumn(heuredebut) => "chaine"
 *
 */

const info = {
  revision: 18,
  name: "lienyoutube",
  created: "2023-09-27T12:32:12.153Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "chaine",
      "heurefin",
      {
        type: Sequelize.TIME,
        field: "heurefin",
        comment: "heure de fin",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "chaine",
      "heuredebut",
      {
        type: Sequelize.TIME,
        field: "heuredebut",
        comment: "heure de début",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["chaine", "heurefin", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["chaine", "heuredebut", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
