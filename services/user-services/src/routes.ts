import { authenticateToken, validateRequest } from "@shared/middleware";
import { updateProfileSchema } from "./validation";
import { Router } from "express";

const router = Router();
