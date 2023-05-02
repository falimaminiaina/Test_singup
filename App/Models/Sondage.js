const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SondageSchema = new Schema(
    {

        EmployeeNumber:{
            type: Number,
        },
         language: {
            type: String,
            default: "fr"
        },
        dataNeed: {
            needType: {
                type: String,
                enum: [
                Need_Type.PERSONAL_SPACE,
                Need_Type.FOLDER_EMPLOYEES,
                Need_Type.MONITORING_TIME_AND_POINTAGE,
                Need_Type.INTERNAL_COMMUNICATION,
                Need_Type.HR_STATISTIQUE_ANALYTICS,
                Need_Type.MANAGEMENT_HOURS_AND_PAYS,
                Need_Type.DOCUMENTATION,
                Need_Type.REMBORSEMENT,
                Need_Type.SKILLS_MANAGEMENT,
                Need_Type.ORGANIGRAMME,
                Need_Type.MATERIAL_INVENTORY,
                Need_Type.PERFORMANCE_MONITORING,
                Need_Type.FLOW_EMPLOYEES_INTEGRATION,
                Need_Type.WORK_SCHEDULE_HOLIDAYS,
                ],
                default:[]
            },
            code: {
                type: String,
            },
            question: {
                type: String,
                enum:[
                Question_type.NO,
                Question_type.YES_FOR_RECRUITMENT,    
                Question_type.YES_FOR_EMPLOYEE_MANAGEMENT,
                Question_type.YES_FOR_RECRUITING_AND_MANAGING_EMPLOYEES, 
                ]
            },
            careerSite: {
                type: String,
              enum: [
                Recrutement_Type.ADVANCED_CAREER_SITE,
                Recrutement_Type.RECRUITMENT_MANAGEMENT,
                Recrutement_Type.ANALYTICAL_STATISTICS,
                Recrutement_Type.JOBBORDE_MEASURE,
                ],
             default:[]

            }
            
        }
    }
        );
const Sondage = mongoose.model("Sondage", SondageSchema);
module.exports = Sondage;
