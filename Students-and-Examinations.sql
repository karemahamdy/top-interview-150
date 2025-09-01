

select Students.student_id , Students.student_name , Subjects.subject_name , 
COUNT(Examinations.student_id) AS attended_exams
from Students 
join Subjects 
left join Examinations on Examinations.student_id  = Students.student_id AND Subjects.subject_name = Examinations.subject_name
GROUP BY Subjects.subject_name,  Students.student_id
ORDER BY Students.student_id, Subjects.subject_name
