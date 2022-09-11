import model from '../../models/books'
import { matchedData } from 'express-validator'
import utils from '../../middleware/utils'
import db from '../../middleware/db'


/********************
 * Public functions *
 ********************/

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItems = async (req, res) => {
    try {
        const query = await db.checkQueryString(req.query);
        res.status(200).json(await db.getItems(req, model, query));
    } catch (error) {
        utils.handleError(res, error);
    }
};

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await utils.isIDGood(req.id)
        res.status(200).json(await db.getItem(id, model))
    } catch (error) {
        utils.handleError(res, error)
    }
}

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await utils.isIDGood(req.id)
        res.status(200).json(await db.updateItem(id, model, req))

    } catch (error) {
        utils.handleError(res, error)
    }
}

/**Â
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
    try {
        req = matchedData(req)
        res.status(201).json(await db.createItem(req, model))
    } catch (error) {
        console.log(error)
        utils.handleError(res, error)
    }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await utils.isIDGood(req.id)
        res.status(200).json(await db.deleteItem(id, model))
    } catch (error) {
        utils.handleError(res, error)
    }
}



