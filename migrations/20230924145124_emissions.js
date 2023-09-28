const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(utilisateur) => "media"
 * createTable() => "categorie", deps: []
 * createTable() => "chaine", deps: [ville]
 * createTable() => "emission", deps: [chaine]
 * addColumn(chaine) => "utilisateur"
 *
 */

const info = {
  revision: 8,
  name: "emissions",
  created: "2023-09-24T14:51:24.089Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "utilisateur", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "categorie",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "chaine",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
        frequence: {
          type: Sequelize.STRING,
          field: "frequence",
          comment: "Fréquence",
          defaultValue: "",
          allowNull: false,
        },
        lienradio: {
          type: Sequelize.STRING,
          field: "lienradio",
          comment: "Lien radio",
          defaultValue: "",
          allowNull: false,
        },
        lientv: {
          type: Sequelize.STRING,
          field: "lientv",
          comment: "Lien TV",
          defaultValue: "",
          allowNull: false,
        },
        ville: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ville", key: "id" },
          field: "ville",
          name: "ville",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "emission",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        chaine: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "chaine", key: "id" },
          field: "chaine",
          name: "chaine",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "utilisateur",
      "chaine",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "chaine", key: "id" },
        field: "chaine",
        name: "chaine",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["utilisateur", "chaine", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categorie", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["chaine", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["emission", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "utilisateur",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "utilisateur", key: "id" },
        field: "utilisateur",
        name: "utilisateur",
        allowNull: true,
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
