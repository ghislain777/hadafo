const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(description) => "chaine"
 * changeColumn(heuredebut) => "chaine"
 * changeColumn(heurefin) => "chaine"
 *
 */

const info = {
  revision: 20,
  name: "noname",
  created: "2023-12-14T07:37:58.726Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "chaine",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "chaine",
      "heuredebut",
      {
        type: Sequelize.TIME,
        field: "heuredebut",
        comment: "heure de début",
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "chaine",
      "heurefin",
      {
        type: Sequelize.TIME,
        field: "heurefin",
        comment: "heure de fin",
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "chaine",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
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
  {
    fn: "changeColumn",
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
