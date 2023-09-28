const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(lienyoutube) => "chaine"
 * addColumn(emissionfilmee) => "chaine"
 * addColumn(emissionfilmee) => "emission"
 *
 */

const info = {
  revision: 17,
  name: "lienyoutube",
  created: "2023-09-26T21:45:31.094Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "chaine",
      "lienyoutube",
      {
        type: Sequelize.BOOLEAN,
        field: "lienyoutube",
        comment: "Lien TV Youtube?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "chaine",
      "emissionfilmee",
      {
        type: Sequelize.BOOLEAN,
        field: "emissionfilmee",
        comment: "Emission en live filmée?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "emission",
      "emissionfilmee",
      {
        type: Sequelize.BOOLEAN,
        field: "emissionfilmee",
        comment: "Emission  filmée?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["chaine", "lienyoutube", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["chaine", "emissionfilmee", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["emission", "emissionfilmee", { transaction }],
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
