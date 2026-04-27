import os
# import google.generativeai as genai
from django.conf import settings

# genai.configure(api_key=settings.GOOGLE_API_KEY)

def generate_board_structure(prompt):
    """
    Uses Gemini to generate a board structure (lists and cards) based on a prompt.
    Returns a JSON-compatible dictionary.
    (AI currently disabled - returning mock structure)
    """
    # model = genai.GenerativeModel("gemini-1.5-pro")
    
    # full_prompt = f"""
    # You are an expert project manager. Given the goal: "{prompt}", 
    # generate a comprehensive Kanban board structure.
    # ...
    # """
    
    # response = model.generate_content(full_prompt)
    # text = response.text
    # ...
    
    return {
        "lists": [
            {
                "title": "To Do",
                "cards": [
                    { "title": "Setup Project", "description": "Initial setup of the board." },
                    { "title": "Define Requirements", "description": "Document the core requirements." }
                ]
            },
            {
                "title": "In Progress",
                "cards": []
            },
            {
                "title": "Done",
                "cards": []
            }
        ]
    }

def analyze_card_content(title, description):
    """
    Expands a card title and short description into a full professional description.
    (AI currently disabled - returning mock expansion)
    """
    # model = genai.GenerativeModel("gemini-1.5-flash")
    # ...
    # response = model.generate_content(full_prompt)
    # return response.text
    
    return f"**Mock Analysis for: {title}**\n\nObjective: {description}\n\nKey Requirements:\n- Component A implementation\n- Component B implementation\n\nDefinition of Done:\n- All tests passing\n- Code reviewed"

def chat_with_assistant(user_message, user_context):
    """
    Handles a conversation with the user, providing answers based on their board context.
    (AI currently disabled - returning mock response)
    """
    # model = genai.GenerativeModel("gemini-1.5-flash")
    # ...
    # response = model.generate_content([system_instruction, context_str, user_message])
    # return response.text
    
    return "I'm the Productive Flow AI Assistant. Currently, my AI brain is resting, but I'm here to help you manage your tasks manually! How else can I assist you today?"

