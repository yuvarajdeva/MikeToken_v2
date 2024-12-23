const { ethers } = require('ethers');
const abi = require('../config/abi.json');
const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");


const provider = new ethers.providers.JsonRpcProvider(
    `https://bnb-mainnet.g.alchemy.com/v2/lVSIFTD3PJUIbEz36C4wS1YLIZVe06-U`
  );

const contract = new ethers.Contract("0xF542aC438CF8Cd4477A1fc7aB88ADDA5426d55Ed", abi, provider);

exports.getTotalSupply = asyncErrorHandler(async (req, res, next) => {
    try {
      const supply = await contract.totalSupply();

      res.status(200).json({
        success: true,
        data: (supply.toString())/10**18,
      });
    } catch (error) {
      next(new ErrorHandler('Failed to fetch contract supply', 500));
    }
  });

  exports.getName = asyncErrorHandler(async (req, res, next) => {
    try {
      const name = await contract.name();

      res.status(200).json({
        success: true,
        data: name,
      });
    } catch (error) {
      next(new ErrorHandler('Failed to fetch contract name', 500));
    }
  });

  exports.getSymbol = asyncErrorHandler(async (req, res, next) => {
    try {
      const symbol = await contract.symbol();

      res.status(200).json({
        success: true,
        data: symbol,
      });
    } catch (error) {
      next(new ErrorHandler('Failed to fetch contract symbol', 500));
    }
  });
exports.getOwner = asyncErrorHandler(async (req, res, next) => {
    try {
      const owner = await contract.owner();

      res.status(200).json({
        success: true,
        data: owner,
      });
    } catch (error) {
      next(new ErrorHandler('Failed to fetch contract owner', 500));
    }
  });

exports.getBalance = asyncErrorHandler(async (req, res, next) => {
    const { address } = req.query;
  
    try {
      const balance = await contract.balanceOf(address);
  
      res.status(200).json({
        success: true,
        data: {
          address,
          balance: (balance.toString())/10**18,
        },
      });
    } catch (error) {
      next(new ErrorHandler('Failed to fetch user balance', 500));
    }
});